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
  import maplibregl from "maplibre-gl";
  import { mapState, maplibreStyleUrl } from "../lib/store";
  import { get } from "svelte/store";

  let mapClasses = "h-full w-full";
  let map: any; // This will hold the map instance
  let initialMapState = get(mapState);
  let styleUrl = get(maplibreStyleUrl);

  onMount(() => {
    maplibregl.setRTLTextPlugin(
      "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
      true
    );

    map.on("moveend", () => {
      mapState.set({
        center: [map.getCenter().lng, map.getCenter().lat],
        zoom: map.getZoom(),
      });
    });

    const unsubscribe = mapState.subscribe(($mapState) => {
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
      unsubscribe();
    };
  });
</script>

<MapLibre
  bind:map
  class={mapClasses}
  style={styleUrl}
  center={initialMapState.center}
  zoom={initialMapState.zoom}
  attributionControl={false}
>
  <NavigationControl position="top-left" />
  <GeolocateControl position="top-left" fitBoundsOptions={{ maxZoom: 12 }} />
  <FullscreenControl position="top-left" />
  <ScaleControl />
  <AttributionControl
    customAttribution={`A <strong class="text-red-500">custom</strong> attribution`}
  />
</MapLibre>
