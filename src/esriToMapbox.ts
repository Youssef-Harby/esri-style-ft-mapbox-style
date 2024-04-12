async function fetchEsriStyleJson(baseUrl: string, token: string | null): Promise<any> {
    const styleUrl = `${baseUrl}/resources/styles/root.json${token ? `?token=${token}` : ''}`;
    const response = await fetch(styleUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch Esri style JSON: ${response.statusText}`);
    }
    return response.json();
}


function resolveUrlPath(url: string): string {
    const urlObj = new URL(url);
    const pathSegments = urlObj.pathname.split('/').filter(segment => segment !== '');
    const resolvedSegments = [];

    for (const segment of pathSegments) {
        if (segment === '..') {
            if (resolvedSegments.length > 0) {
                resolvedSegments.pop();
            }
            // If there's nothing to pop, it implies that we're at the root; just ignore the segment
        } else if (segment !== '.') {
            resolvedSegments.push(segment);
        }
    }

    urlObj.pathname = '/' + resolvedSegments.join('/');
    return decodeURI(urlObj.toString());
}

function appendTokenToUrl(url: string, token: string | null): string {
    if (token) {
        const urlObj = new URL(url);
        urlObj.searchParams.append('token', token);
        return urlObj.toString();
    }
    return url;
}

async function constructMapboxStyleFromEsri(baseUrl: string, esriStyleJson?: any): Promise<any> {
    // Extract the token from the base URL
    const urlObj = new URL(baseUrl);
    const token = urlObj.searchParams.get('token');

    // Remove the token from the base URL
    urlObj.searchParams.delete('token');
    const normalizedBaseUrl = urlObj.toString().replace(/\/$/, '');

    // Fetch the Esri style JSON if it's not provided
    if (!esriStyleJson) {
        esriStyleJson = await fetchEsriStyleJson(normalizedBaseUrl, token);
    }

    // Clone the Esri style JSON to avoid mutating the original object
    const mapboxStyle = JSON.parse(JSON.stringify(esriStyleJson));

    // Adjust the 'sources' to use the correct tile URL pattern while preserving other properties
    if (mapboxStyle.sources) {
        for (const sourceKey in mapboxStyle.sources) {
            const source = mapboxStyle.sources[sourceKey];
            if (source.type === 'vector' && source.url) {
                // Preserve all source properties
                const updatedSource = { ...source };
                // Update tiles URL, remove 'url' property
                updatedSource.tiles = [`${normalizedBaseUrl}/tile/{z}/{y}/{x}.pbf${token ? `?token=${token}` : ''}`];
                delete updatedSource.url;

                // Update the source with the new properties
                mapboxStyle.sources[sourceKey] = updatedSource;
            }
        }
    }

    // Correct the sprite and glyphs paths
    if (mapboxStyle.sprite) {
        mapboxStyle.sprite = appendTokenToUrl(`${normalizedBaseUrl}/resources/${mapboxStyle.sprite.replace('../', '')}`, token);
    }
    if (mapboxStyle.glyphs) {
        mapboxStyle.glyphs = appendTokenToUrl(`${normalizedBaseUrl}/resources/${mapboxStyle.glyphs.replace('../', '')}`, token);
    }

    return mapboxStyle;
}


async function resolveEsriRelativePaths(baseUrl: string, esriStyleJson?: any): Promise<any> {
    // Extract the token from the base URL
    const urlObj = new URL(baseUrl);
    const token = urlObj.searchParams.get('token');

    // Remove the token from the base URL
    urlObj.searchParams.delete('token');
    const normalizedBaseUrl = urlObj.toString().replace(/\/$/, '');

    // Fetch the Esri style JSON if it's not provided
    if (!esriStyleJson) {
        esriStyleJson = await fetchEsriStyleJson(normalizedBaseUrl, token);
    }

    // Resolve the sprite path
    if (esriStyleJson.sprite) {
        esriStyleJson.sprite = decodeURI(appendTokenToUrl(`${normalizedBaseUrl}/resources/${esriStyleJson.sprite.replace('../', '')}`, token));
    }

    // Resolve the glyphs path
    if (esriStyleJson.glyphs) {
        esriStyleJson.glyphs = decodeURI(appendTokenToUrl(`${normalizedBaseUrl}/resources/${esriStyleJson.glyphs.replace('../', '')}`, token));
    }

    // Resolve the source URL
    if (esriStyleJson.sources) {
        for (const sourceKey in esriStyleJson.sources) {
            const source = esriStyleJson.sources[sourceKey];
            if (source.type === 'vector' && source.url) {
                source.url = decodeURI(appendTokenToUrl(`${normalizedBaseUrl}/${source.url.replace('../../', '')}`, token));
            }
        }
    }

    return esriStyleJson;
}


async function constructMapboxStyleFromEsriAbsolute(esriStyleJson?: any): Promise<any> {
    // Fetch the Esri style JSON if it's not provided
    if (!esriStyleJson) {
        throw new Error(`Failed to fetch Esri style JSON`);
    }

    // Extract the token from the sprite URL
    const spriteUrlObj = new URL(esriStyleJson.sprite);
    const token = spriteUrlObj.searchParams.get('token');

    // Resolve paths in 'sprite' and 'glyphs'
    if (esriStyleJson.sprite) {
        esriStyleJson.sprite = decodeURI(resolveUrlPath(appendTokenToUrl(esriStyleJson.sprite, token)));
    }
    if (esriStyleJson.glyphs) {
        esriStyleJson.glyphs = decodeURI(resolveUrlPath(appendTokenToUrl(esriStyleJson.glyphs, token)));
    }

    // Adjust the 'sources' to use the correct tile URL pattern while preserving other properties
    if (esriStyleJson.sources) {
        for (const sourceKey in esriStyleJson.sources) {
            const source = esriStyleJson.sources[sourceKey];
            if (source.type === 'vector' && source.url) {
                const resolvedSourceUrl = decodeURI(resolveUrlPath(source.url));
                const baseTileUrl = resolvedSourceUrl.endsWith('/') ? resolvedSourceUrl : `${resolvedSourceUrl}/`;

                // Remove the token query parameter from the base tile URL
                const baseTileUrlObj = new URL(baseTileUrl);
                const token = baseTileUrlObj.searchParams.get('token');
                baseTileUrlObj.searchParams.delete('token');
                let baseUrlWithoutToken = baseTileUrlObj.toString();

                // Add a trailing slash if missing
                if (!baseUrlWithoutToken.endsWith('/')) {
                    baseUrlWithoutToken += '/';
                }

                const updatedSource = { ...source };
                updatedSource.tiles = [`${baseUrlWithoutToken}tile/{z}/{y}/{x}.pbf${token ? `?token=${token}` : ''}`];
                delete updatedSource.url;
                esriStyleJson.sources[sourceKey] = updatedSource;
            }
        }
    }

    // Correct layer IDs by replacing invalid characters
    if (esriStyleJson.layers) {
        esriStyleJson.layers.forEach((layer: any) => {
            layer.id = layer.id.replace(/\//g, '_');
        });
    }

    return esriStyleJson;
}





export { constructMapboxStyleFromEsri, fetchEsriStyleJson, resolveEsriRelativePaths, constructMapboxStyleFromEsriAbsolute, resolveUrlPath };
