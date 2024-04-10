<script lang="ts">
  import { onMount } from "svelte";
  import { mapState } from "../lib/store";
  import type { MapState } from "../lib/store";
  import Map from "@arcgis/core/Map";
  import MapView from "@arcgis/core/views/MapView";
  import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
  import { get } from "svelte/store";

  let initialMapState: MapState = get(mapState);

  onMount(() => {
    const customBasemap = new VectorTileLayer({
      url: "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer",
    });

    const map = new Map({
      basemap: {
        baseLayers: [customBasemap],
      },
    });

    const view = new MapView({
      container: "viewDiv",
      map: map,
      center: initialMapState.center,
      zoom: initialMapState.zoom,
    });

    view.when(() => {
      // Update shared state on map movement
      view.watch(["center", "zoom"], () => {
        mapState.set({
          center: [view.center.longitude, view.center.latitude],
          zoom: view.zoom,
        });
      });
    });

    const unsubscribe = mapState.subscribe(($mapState) => {
      if (
        view.center.longitude !== $mapState.center[0] ||
        view.center.latitude !== $mapState.center[1] ||
        view.zoom !== $mapState.zoom
      ) {
        view.goTo({
          center: $mapState.center,
          zoom: $mapState.zoom,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  });
</script>

<div id="viewDiv" class="h-full"></div>
