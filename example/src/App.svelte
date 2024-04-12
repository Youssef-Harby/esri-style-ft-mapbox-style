<script lang="ts">
  import {
    esriBasemapUrl,
    maplibreBasemapUrl,
    esriStyleJson,
    maplibreStyleJson,
  } from "./lib/store";
  import EsriMap from "./lib/EsriMap.svelte";
  import MaplibreMap from "./lib/MaplibreMap.svelte";
  import CodeEditor from "./lib/Monaco/CodeEditor.svelte";
  import {
    resolveEsriRelativePaths,
    constructMapboxStyleFromEsriAbsolute,
  } from "@esri-style-ft-mapbox-style/esriToMapbox";

  let esriUrlInput: string = "";
  let maplibreUrlInput: string = "";
  let esriEditorContent = $esriStyleJson;
  let maplibreEditorContent = $maplibreStyleJson;

  async function esriLogicSection(): Promise<void> {
    if (!esriUrlInput) return;
    try {
      const theFetchedEsriStyleJson =
        await resolveEsriRelativePaths(esriUrlInput);
      esriEditorContent = JSON.stringify(theFetchedEsriStyleJson, null, 2);
      esriStyleJson.set(esriEditorContent);
      esriBasemapUrl.set(esriUrlInput);
    } catch (error) {
      console.error("Failed to convert style:", error);
    }
  }

  async function maplibreLogicSection(): Promise<void> {
    if (!maplibreUrlInput) return;
    try {
      const response = await fetch(maplibreUrlInput);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const theFetchedMapLibreStyleJson = await response.json();
      maplibreEditorContent = JSON.stringify(
        theFetchedMapLibreStyleJson,
        null,
        2
      );
      maplibreStyleJson.set(maplibreEditorContent);
      maplibreBasemapUrl.set(maplibreUrlInput);
    } catch (error) {
      console.error("Failed to convert style:", error);
    }
  }

  function handleEsriEditorChange(event: CustomEvent<string>) {
    esriStyleJson.set(event.detail);
    esriEditorContent = event.detail;
  }
  function handleMaplibreEditorChange(event: CustomEvent<string>) {
    maplibreStyleJson.set(event.detail);
    maplibreEditorContent = event.detail;
  }

  async function convertEsriToMaplibreStyle(): Promise<void> {
    const theFetchedMaplibreStyleJson =
      await constructMapboxStyleFromEsriAbsolute(JSON.parse(esriEditorContent));

    maplibreEditorContent = JSON.stringify(
      theFetchedMaplibreStyleJson,
      null,
      2
    );
    maplibreStyleJson.set(maplibreEditorContent);
  }

  function convertMaplibreToEsriStyle(): void {
    esriEditorContent = maplibreEditorContent;
    esriStyleJson.set(esriEditorContent);
  }
</script>

<!-- Navbar -->
<div class="navbar bg-gray-500 shadow-lg">
  <div class="navbar-start">
    <a class=" normal-case text-xl text-white" href="/"
      >Vector Tiles Styles Converter (Esri - Mapbox)</a
    >
  </div>
  <div class="navbar-end">
    <a
      href="https://github.com/Youssef-Harby/esri-style-ft-mapbox-style"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        class="w-8 h-6 btn-square btn"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
          fill="currentColor"
        />
      </svg>
    </a>
  </div>
</div>
<div class="flex flex-col md:flex-row h-screen">
  <!-- CODE EDITOR 1 -->
  <div class="flex-1 flex flex-col sm:h-full">
    <div class="flex-1 p-4 overflow-auto bg-gray-50">
      <CodeEditor
        bind:content={esriEditorContent}
        on:change={handleEsriEditorChange}
        language="json"
      />
    </div>
    <div class="flex items-center p-4 bg-gray-200">
      <input
        bind:value={esriUrlInput}
        type="text"
        placeholder="Enter Esri Vector Tiles Service URL (ends with /VectorTileServer)"
        class="input input-bordered w-full mr-2"
      />
      <button class="btn btn-outline" on:click={esriLogicSection}>Fetch</button>
    </div>
    <div class="flex-1">
      <EsriMap></EsriMap>
    </div>
  </div>

  <!-- DIVIDER -->
  <div
    class="flex justify-center items-center p-2 bg-gray-500 shadow z-10 w-full md:w-16 md:flex-col sm:flex-row"
  >
    <button
      class="btn btn-outline-white btn-md mx-2 md:my-2"
      on:click={convertEsriToMaplibreStyle}>⇨</button
    >
    <button
      class="btn btn-outline-white btn-md mx-2 md:my-2"
      on:click={convertMaplibreToEsriStyle}>⇦</button
    >
    <!-- <button class="btn btn-circle btn-sm mx-2 md:my-2">⟳</button> -->
    <!-- <button class="btn btn-circle btn-sm mx-2 md:my-2">≡</button> -->
  </div>

  <!-- CODE EDITOR 2 -->
  <div class="flex-1 flex flex-col sm:h-full">
    <div class="flex-1 p-4 overflow-auto bg-gray-50">
      <CodeEditor
        bind:content={maplibreEditorContent}
        language="json"
        on:change={handleMaplibreEditorChange}
      ></CodeEditor>
    </div>
    <div class="flex items-center p-4 bg-gray-200">
      <input
        type="text"
        bind:value={maplibreUrlInput}
        placeholder="Enter Mapbox Style GL URL"
        class="input input-bordered w-full mr-2"
      />
      <button class="btn btn-outline" on:click={maplibreLogicSection}
        >Fetch</button
      >
    </div>
    <div class="flex-1">
      <MaplibreMap></MaplibreMap>
    </div>
  </div>
</div>
