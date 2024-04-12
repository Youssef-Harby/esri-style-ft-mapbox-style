<script lang="ts">
  import { onMount } from "svelte";
  import {
    MapLibre,
    NavigationControl,
    GeolocateControl,
    FullscreenControl,
    ScaleControl,
    AttributionControl,
  } from "svelte-maplibre";
  import { mapState, maplibreStyleJson } from "../lib/store";
  import { get } from "svelte/store";

  let mapClasses = "h-full w-full";
  let map: any; // This will hold the map instance
  let initialMapState = get(mapState);
  let isStyleValid = true; // Track if the style is valid

  onMount(() => {
    map.on("moveend", () => {
      mapState.set({
        center: [map.getCenter().lng, map.getCenter().lat],
        zoom: map.getZoom(),
      });
    });

    const unsubscribeMaplibreStyleJson = maplibreStyleJson.subscribe(
      ($maplibreStyleJson) => {
        try {
          map.setStyle(JSON.parse($maplibreStyleJson));
          isStyleValid = true;
        } catch (error) {
          console.error("Invalid style:", error);
          isStyleValid = false;
        }
      }
    );

    const unsubscribeMapState = mapState.subscribe(($mapState) => {
      if (map.loaded()) {
        if (
          map.getCenter().lng !== $mapState.center[0] ||
          map.getCenter().lat !== $mapState.center[1] ||
          map.getZoom() !== $mapState.zoom
        ) {
          map.jumpTo({
            center: $mapState.center,
            zoom: $mapState.zoom,
          });
        }
      }
    });

    return () => {
      unsubscribeMaplibreStyleJson();
      unsubscribeMapState();
    };
  });
</script>

{#if isStyleValid}
  <MapLibre
    bind:map
    class={mapClasses}
    style={JSON.parse($maplibreStyleJson)}
    center={initialMapState.center}
    zoom={initialMapState.zoom}
    attributionControl={false}
  >
    <NavigationControl position="top-left" />
    <GeolocateControl position="top-left" fitBoundsOptions={{ maxZoom: 12 }} />
    <FullscreenControl position="top-left" />
    <ScaleControl />
    <AttributionControl
      customAttribution={`<strong class="text-gray-500">MapLibre</strong>`}
    />
  </MapLibre>
{:else}
  <div class="h-full w-full flex items-center justify-center">
    <p class="text-red-500">Invalid style, please check your code.</p>
  </div>
{/if}
