<script lang="ts">
  import EsriToMapbox from "./lib/EsriToMapbox.svelte";
</script>

<main>
  <div>
    <a
      href="https://developers.arcgis.com/rest/services-reference/enterprise/vector-tile-style.htm"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/de/4/46/ESRI_Logo.svg"
        class="logo"
        alt="Esri Logo"
      />
    </a>
    <a
      href="https://docs.mapbox.com/style-spec/guides/"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Mapbox_logo_2019.svg"
        class="logo svelte"
        alt="Mapbox Logo"
      />
    </a>
  </div>
  <h1>Vector Tiles Style Converter</h1>

  <div class="card">
    <EsriToMapbox />
  </div>

  <p>
    Check out <a
      href="https://www.npmjs.com/package/esri-style-ft-mapbox-style"
      target="_blank"
      rel="noreferrer">npm package</a
    >, now you can convert Esri styles to Mapbox styles and vice verce in a
    single line of code.
  </p>

  <p class="read-the-docs">Click on the Esri and Mapbox logos to learn more</p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
