<script lang="ts">
  import { onMount } from "svelte";
  import { mapState, esriStyleJson } from "../lib/store";
  import type { MapState } from "../lib/store";
  import Map from "@arcgis/core/Map";
  import MapView from "@arcgis/core/views/MapView";
  import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
  import { get } from "svelte/store";
  import { when } from "@arcgis/core/core/reactiveUtils";

  let initialMapState: MapState = get(mapState);
  let map: Map;
  let view: MapView;

  onMount(() => {
    const customBasemap = new VectorTileLayer({
      // url: initialBasemapUrl,
      style: $esriStyleJson,
    });

    const map = new Map({
      basemap: {
        baseLayers: [customBasemap],
      },
    });

    view = new MapView({
      container: "viewDiv",
      map: map,
      center: initialMapState.center,
      zoom: initialMapState.zoom,
    });

    view.when(() => {
      view.watch(["center", "zoom"], () => {
        mapState.set({
          center: [view.center.longitude, view.center.latitude],
          zoom: view.zoom,
        });
      });
    });

    const mapStateUnsub = mapState.subscribe(($mapState) => {
      when(
        () => view.ready,
        () => {
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
        }
      );
    });

    const basemapStyleUnsub = esriStyleJson.subscribe(($esriStyleJson) => {
      const currentBasemap = view.map.basemap.baseLayers.getItemAt(0);
      const updatedStyle = JSON.parse($esriStyleJson);
      if (
        currentBasemap instanceof VectorTileLayer &&
        currentBasemap.style !== updatedStyle
      ) {
        const newBasemap = new VectorTileLayer({
          style: updatedStyle,
        });

        newBasemap
          .load()
          .then(() => {
            view.map.basemap.baseLayers.removeAll();
            view.map.basemap.baseLayers.add(newBasemap);
          })
          .catch((error) => {
            console.error("Failed to load basemap:", error);
          });
      }
    });

    return () => {
      mapStateUnsub();
      basemapStyleUnsub();
    };
  });
</script>

<div id="viewDiv" class="h-full"></div>
