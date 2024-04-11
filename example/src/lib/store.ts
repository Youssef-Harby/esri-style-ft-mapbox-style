import { writable } from "svelte/store";

export interface MapState {
    center: [number, number];
    zoom: number;
}

// General map state for center and zoom
export const mapState = writable<MapState>({
    center: [-118.805, 34.027],
    zoom: 13,
});

// Separate store for Esri basemap URL
export const basemapUrl = writable<string>("https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer");

// Optional: Separate store for Maplibre style URL if needed
export const maplibreStyle = writable<string>("https://basemaps.cartocdn.com/gl/positron-gl-style/style.json");
