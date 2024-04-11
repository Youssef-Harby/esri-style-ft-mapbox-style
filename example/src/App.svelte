<script lang="ts">
  import { mapState, basemapUrl, maplibreStyle } from "./lib/store";
  import EsriMap from "./lib/EsriMap.svelte";
  import MaplibreMap from "./lib/MaplibreMap.svelte";
  import CodeEditor from "./lib/Monaco/CodeEditor.svelte";
  import {
    constructMapboxStyleFromEsri,
    fetchEsriStyleJson,
  } from "@esri-style-ft-mapbox-style/esriToMapbox";
  import { writable } from "svelte/store";

  let urlInput: string = "";
  let mapboxStyleJson = writable<string>("");
  let esriStyleJson = writable<string>("");

  async function fetchMapboxStyle(): Promise<void> {
    if (!urlInput) return;
    try {
      const theMapboxStyle = await constructMapboxStyleFromEsri(urlInput);
      mapboxStyleJson.set(JSON.stringify(theMapboxStyle, null, 2));
      basemapUrl.set(urlInput); // Update the basemap URL in the store
      maplibreStyle.set(theMapboxStyle);

      const theEsriStyle = await fetchEsriStyleJson(urlInput);
      esriStyleJson.set(JSON.stringify(theEsriStyle, null, 2));
    } catch (error) {
      console.error("Failed to convert style:", error);
      mapboxStyleJson.set(`Error: ${(error as Error).message}`);
    }
  }
  function handleMapboxStyleChange(event: CustomEvent<string>) {
    mapboxStyleJson.set(event.detail);
  }

  // Watch for changes in mapboxStyleJson and update maplibreStyle
  $: {
    try {
      const parsedStyle = JSON.parse($mapboxStyleJson);
      maplibreStyle.set(parsedStyle);
    } catch (error) {
      console.error("Failed to parse Mapbox style JSON:", error);
    }
  }
</script>

<div class="flex flex-col md:flex-row h-screen">
  <!-- CODE EDITOR 1 -->
  <div class="flex-1 flex flex-col">
    <div class="flex-1 p-4 overflow-auto bg-gray-50">
      <CodeEditor bind:content={$esriStyleJson} language="json" />
    </div>
    <div class="flex items-center p-4 bg-gray-200">
      <input
        bind:value={urlInput}
        type="text"
        placeholder="Enter URL"
        class="input input-bordered w-full mr-2"
      />
      <button class="btn btn-outline" on:click={fetchMapboxStyle}>Fetch</button>
    </div>
    <div class="flex-1">
      <EsriMap></EsriMap>
    </div>
  </div>

  <!-- Divider with buttons -->
  <div
    class="flex flex-col justify-center items-center p-2 bg-gray-500 shadow z-10 md:w-16 md:flex"
  >
    <button class="btn btn-outline-white btn-md my-2">⇦</button>
    <button class="btn btn-outline-white btn-md my-2">⇨</button>
    <button class="btn btn-circle btn-sm my-2">⟳</button>
    <button class="btn btn-circle btn-sm my-2">≡</button>
  </div>

  <!-- CODE EDITOR 2 -->
  <div class="flex-1 flex flex-col">
    <div class="flex-1 p-4 overflow-auto bg-gray-50">
      <CodeEditor
        bind:content={$mapboxStyleJson}
        on:change={handleMapboxStyleChange}
        language="json"
      ></CodeEditor>
    </div>
    <div class="flex items-center p-4 bg-gray-200">
      <input
        type="text"
        placeholder="Enter URL"
        class="input input-bordered w-full mr-2"
      />
      <button class="btn btn-outline">Fetch</button>
    </div>
    <div class="flex-1">
      <!-- Show map in both mobile and desktop view -->
      <MaplibreMap></MaplibreMap>
    </div>
  </div>
</div>
