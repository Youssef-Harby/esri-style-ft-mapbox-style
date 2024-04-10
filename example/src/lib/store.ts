// src/lib/store.ts
import { writable } from 'svelte/store';

export interface MapState {
    center: [number, number]; // [longitude, latitude]
    zoom: number;
}

export const mapState = writable<MapState>({
    center: [-118.805, 34.027], // Initial center
    zoom: 13, // Initial zoom level
});
