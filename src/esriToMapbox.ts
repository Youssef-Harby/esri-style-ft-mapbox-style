async function fetchEsriStyleJson(baseUrl: string): Promise<any> {
    const styleUrl = `${baseUrl}/resources/styles/root.json`;
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


async function constructMapboxStyleFromEsri(baseUrl: string, esriStyleJson?: any): Promise<any> {
    // Normalize the base URL to ensure it does not end with a slash
    const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

    // Fetch the Esri style JSON if it's not provided
    if (!esriStyleJson) {
        esriStyleJson = await fetchEsriStyleJson(normalizedBaseUrl);
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
                updatedSource.tiles = [`${normalizedBaseUrl}/tile/{z}/{y}/{x}.pbf`];
                delete updatedSource.url;

                // Update the source with the new properties
                mapboxStyle.sources[sourceKey] = updatedSource;
            }
        }
    }

    // Correct the sprite and glyphs paths
    if (mapboxStyle.sprite) {
        mapboxStyle.sprite = `${normalizedBaseUrl}/resources/${mapboxStyle.sprite.replace('../', '')}`;
    }
    if (mapboxStyle.glyphs) {
        mapboxStyle.glyphs = `${normalizedBaseUrl}/resources/${mapboxStyle.glyphs.replace('../', '')}`;
    }

    return mapboxStyle;
}

async function resolveEsriRelativePaths(baseUrl: string, esriStyleJson?: any): Promise<any> {
    // Normalize the base URL to ensure it does not end with a slash
    const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

    // Fetch the Esri style JSON if it's not provided
    if (!esriStyleJson) {
        esriStyleJson = await fetchEsriStyleJson(normalizedBaseUrl);
    }
    // Resolve the sprite path
    if (esriStyleJson.sprite) {
        esriStyleJson.sprite = `${normalizedBaseUrl}/resources/${esriStyleJson.sprite.replace('../', '')}`;
    }


    // Resolve the glyphs path
    if (esriStyleJson.glyphs) {
        esriStyleJson.glyphs = `${normalizedBaseUrl}/resources/${esriStyleJson.glyphs.replace('../', '')}`;
    }

    // Resolve the source URL
    if (esriStyleJson.sources) {
        for (const sourceKey in esriStyleJson.sources) {
            const source = esriStyleJson.sources[sourceKey];
            if (source.type === 'vector' && source.url) {
                source.url = `${normalizedBaseUrl}/${source.url.replace('../../', '')}`;
            }
        }
    }

    return esriStyleJson;
}

async function constructMapboxStyleFromEsriAbsolute(esriStyleJson?: any): Promise<any> {
    // Normalize the base URL to ensure it does not end with a slash
    // Fetch the Esri style JSON if it's not provided
    if (!esriStyleJson) {
        // error
        throw new Error(`Failed to fetch Esri style JSON`);
    }

    // Resolve paths in 'sprite' and 'glyphs'
    if (esriStyleJson.sprite) {
        esriStyleJson.sprite = resolveUrlPath(esriStyleJson.sprite);
    }
    if (esriStyleJson.glyphs) {
        esriStyleJson.glyphs = resolveUrlPath(esriStyleJson.glyphs);
    }

    // Adjust the 'sources' to use the correct tile URL pattern while preserving other properties
    if (esriStyleJson.sources) {
        for (const sourceKey in esriStyleJson.sources) {
            const source = esriStyleJson.sources[sourceKey];
            if (source.type === 'vector' && source.url) {
                // Resolve path in source URL
                const resolvedSourceUrl = resolveUrlPath(source.url);

                // Preserve all source properties
                const updatedSource = { ...source };

                // Ensure the resolved URL ends with a slash before appending 'tile/{z}/{y}/{x}.pbf'
                const baseTileUrl = resolvedSourceUrl.endsWith('/') ? resolvedSourceUrl : `${resolvedSourceUrl}/`;
                updatedSource.tiles = [`${baseTileUrl}tile/{z}/{y}/{x}.pbf`];

                delete updatedSource.url;

                // Update the source with the new properties
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
