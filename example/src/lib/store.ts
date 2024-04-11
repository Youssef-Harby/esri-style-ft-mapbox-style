import { writable } from "svelte/store";

export interface MapState {
    center: [number, number];
    zoom: number;
}

// General map state for center and zoom
export const mapState = writable<MapState>({
    center: [40.2, 24.5],
    zoom: 4,
});

export const esriBasemapUrl = writable("https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer");
export const maplibreBasemapUrl = writable("https://basemaps.cartocdn.com/gl/positron-gl-style/style.json");
export const esriStyleJson = writable(JSON.stringify({
    "version": 8,
    "sprite": "https://basemaps.arcgis.com/arcgis/rest/services/World_Hillshade_v2/VectorTileServer/resources/sprites/sprite",
    "glyphs": "https://basemaps.arcgis.com/arcgis/rest/services/World_Hillshade_v2/VectorTileServer/resources/fonts/{fontstack}/{range}.pbf",
    "sources": {
        "esri": {
            "type": "vector",
            "url": "https://basemaps.arcgis.com/arcgis/rest/services/World_Hillshade_v2/VectorTileServer/"
        }
    },
    "layers": [
        {
            "id": "Hillshade/Shadow Base/1",
            "type": "fill",
            "source": "esri",
            "source-layer": "Hillshade",
            "filter": [
                "==",
                "_symbol",
                6
            ],
            "layout": {},
            "paint": {
                "fill-color": "#dcd5cc",
                "fill-antialias": false
            }
        },
        {
            "id": "Hillshade/Highlight Light/1",
            "type": "fill",
            "source": "esri",
            "source-layer": "Hillshade",
            "filter": [
                "==",
                "_symbol",
                5
            ],
            "layout": {},
            "paint": {
                "fill-color": "#eae8e3",
                "fill-antialias": false
            }
        },
        {
            "id": "Hillshade/Highlight Strong/1",
            "type": "fill",
            "source": "esri",
            "source-layer": "Hillshade",
            "filter": [
                "==",
                "_symbol",
                4
            ],
            "layout": {},
            "paint": {
                "fill-color": "#f9f8f6",
                "fill-antialias": false
            }
        },
        {
            "id": "Hillshade/Shadow Light/1",
            "type": "fill",
            "source": "esri",
            "source-layer": "Hillshade",
            "filter": [
                "==",
                "_symbol",
                3
            ],
            "layout": {},
            "paint": {
                "fill-color": "#d0c7bb",
                "fill-antialias": false
            }
        },
        {
            "id": "Hillshade/Shadow Moderate/1",
            "type": "fill",
            "source": "esri",
            "source-layer": "Hillshade",
            "filter": [
                "==",
                "_symbol",
                2
            ],
            "layout": {},
            "paint": {
                "fill-color": "#b1a99e",
                "fill-antialias": false
            }
        },
        {
            "id": "Hillshade/Shadow Strong/1",
            "type": "fill",
            "source": "esri",
            "source-layer": "Hillshade",
            "filter": [
                "==",
                "_symbol",
                1
            ],
            "layout": {},
            "paint": {
                "fill-color": "#999487",
                "fill-antialias": false
            }
        },
        {
            "id": "Hillshade/Shadow Very Strong/1",
            "type": "fill",
            "source": "esri",
            "source-layer": "Hillshade",
            "filter": [
                "==",
                "_symbol",
                0
            ],
            "layout": {},
            "paint": {
                "fill-color": "#827a6e",
                "fill-antialias": false
            }
        }
    ]
}, null, 2));
export const maplibreStyleJson = writable("");