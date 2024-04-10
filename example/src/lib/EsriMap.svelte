<script lang="ts">
  import { onMount } from "svelte";
  import Map from "@arcgis/core/Map";
  import MapView from "@arcgis/core/views/MapView";
  // import esriConfig from "@arcgis/core/config";

  // const apiKey: string = "YOUR_API_KEY";

  onMount(() => {
    // esriConfig.apiKey = apiKey;

    const map = new Map({
      basemap: "streets", // Basemap style
    });

    const view = new MapView({
      container: "viewDiv", // Ensure this ID matches the div ID below
      map: map,
      center: [-118.805, 34.027], // Longitude, latitude
      zoom: 13, // Zoom level
    });
  });
</script>

<div id="viewDiv" class="h-full"></div>
<!-- Height management via Tailwind -->
