async function fetchEsriStyleJson(baseUrl: string): Promise<any> {
    const styleUrl = `${baseUrl}/resources/styles/root.json`;
    const response = await fetch(styleUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch Esri style JSON: ${response.statusText}`);
    }
    return response.json();
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

    // Clone the Esri style JSON to avoid mutating the original object
    const resolvedStyle = JSON.parse(JSON.stringify(esriStyleJson));

    // Resolve the sprite path
    if (resolvedStyle.sprite) {
        resolvedStyle.sprite = `${normalizedBaseUrl}/resources/${resolvedStyle.sprite.replace('../', '')}`;
    }

    // Resolve the glyphs path
    if (resolvedStyle.glyphs) {
        resolvedStyle.glyphs = `${normalizedBaseUrl}/resources/${resolvedStyle.glyphs.replace('../', '')}`;
    }

    // Resolve the source URL
    if (resolvedStyle.sources) {
        for (const sourceKey in resolvedStyle.sources) {
            const source = resolvedStyle.sources[sourceKey];
            if (source.type === 'vector' && source.url) {
                source.url = `${normalizedBaseUrl}/${source.url.replace('../../', '')}`;
            }
        }
    }

    return resolvedStyle;
}

async function constructMapboxStyleFromEsriAbsolute(baseUrl: string, esriStyleJson?: any): Promise<any> {
    // Normalize the base URL to ensure it does not end with a slash
    const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

    // Fetch the Esri style JSON if it's not provided
    if (!esriStyleJson) {
        esriStyleJson = await fetchEsriStyleJson(normalizedBaseUrl);
    }

    // Adjust the 'sources' to use the correct tile URL pattern while preserving other properties
    if (esriStyleJson.sources) {
        for (const sourceKey in esriStyleJson.sources) {
            const source = esriStyleJson.sources[sourceKey];
            if (source.type === 'vector' && source.url) {
                // Preserve all source properties
                const updatedSource = { ...source };
                // Update tiles URL, remove 'url' property
                updatedSource.tiles = [`${source.url}tile/{z}/{y}/{x}.pbf`];
                delete updatedSource.url;


                // Update the source with the new properties
                esriStyleJson.sources[sourceKey] = updatedSource;
            }
        }
    }


    return esriStyleJson;
}





export { constructMapboxStyleFromEsri, fetchEsriStyleJson, resolveEsriRelativePaths, constructMapboxStyleFromEsriAbsolute };
