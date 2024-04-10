<script>
  import { MapLibre } from "svelte-maplibre";
</script>

<MapLibre
  center={[50, 20]}
  zoom={7}
  class="map"
  standardControls
  style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
/>

<style>
  :global(.map) {
    height: 100%;
  }
</style>
