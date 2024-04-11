<script lang="ts">
  import {
    mapState,
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
  import { get } from "svelte/store";

  let esriUrlInput: string = "";
  let maplibreUrlInput: string = "";

  async function esriLogicSection(): Promise<void> {
    if (!esriUrlInput) return;
    try {
      const theFetchedEsriStyleJson =
        await resolveEsriRelativePaths(esriUrlInput);
      esriStyleJson.set(JSON.stringify(theFetchedEsriStyleJson, null, 2));
      esriBasemapUrl.set(esriUrlInput);
    } catch (error) {
      console.error("Failed to convert style:", error);
      // mapboxStyleJson.set(`Error: ${(error as Error).message}`);
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
      maplibreStyleJson.set(
        JSON.stringify(theFetchedMapLibreStyleJson, null, 2)
      );
      maplibreBasemapUrl.set(maplibreUrlInput);
    } catch (error) {
      console.error("Failed to convert style:", error);
      // mapboxStyleJson.set(`Error: ${(error as Error).message}`);
    }
  }
  function handleEsriEditorChange(event: CustomEvent<string>) {
    esriStyleJson.set(event.detail);
  }
  function handleMaplibreEditorChange(event: CustomEvent<string>) {
    maplibreStyleJson.set(event.detail);
  }

  async function convertEsriToMaplibreStyle(): Promise<void> {
    const theFetchedMaplibreStyleJson =
      await constructMapboxStyleFromEsriAbsolute(
        esriUrlInput,
        JSON.parse(get(esriStyleJson))
      );

    maplibreStyleJson.set(JSON.stringify(theFetchedMaplibreStyleJson, null, 2));
  }

  function convertMaplibreToEsriStyle(): void {
    esriStyleJson.set(get(maplibreStyleJson));
  }
</script>

<div class="flex flex-col md:flex-row h-screen">
  <!-- CODE EDITOR 1 -->
  <div class="flex-1 flex flex-col">
    <div class="flex-1 p-4 overflow-auto bg-gray-50">
      <CodeEditor
        bind:content={$esriStyleJson}
        on:change={handleEsriEditorChange}
        language="json"
      />
    </div>
    <div class="flex items-center p-4 bg-gray-200">
      <input
        bind:value={esriUrlInput}
        type="text"
        placeholder="Enter URL"
        class="input input-bordered w-full mr-2"
      />
      <button class="btn btn-outline" on:click={esriLogicSection}>Fetch</button>
    </div>
    <div class="flex-1">
      <EsriMap></EsriMap>
    </div>
  </div>

  <!-- Divider with buttons -->
  <div
    class="flex flex-col justify-center items-center p-2 bg-gray-500 shadow z-10 md:w-16 md:flex"
  >
    <button
      class="btn btn-outline-white btn-md my-2"
      on:click={convertEsriToMaplibreStyle}>⇨</button
    >
    <button
      class="btn btn-outline-white btn-md my-2"
      on:click={convertMaplibreToEsriStyle}>⇦</button
    >
    <button class="btn btn-circle btn-sm my-2">⟳</button>
    <button class="btn btn-circle btn-sm my-2">≡</button>
  </div>

  <!-- CODE EDITOR 2 -->
  <div class="flex-1 flex flex-col">
    <div class="flex-1 p-4 overflow-auto bg-gray-50">
      <CodeEditor
        bind:content={$maplibreStyleJson}
        language="json"
        on:change={handleMaplibreEditorChange}
      ></CodeEditor>
    </div>
    <div class="flex items-center p-4 bg-gray-200">
      <input
        type="text"
        bind:value={maplibreUrlInput}
        placeholder="Enter URL"
        class="input input-bordered w-full mr-2"
      />
      <button class="btn btn-outline" on:click={maplibreLogicSection}
        >Fetch</button
      >
    </div>
    <div class="flex-1">
      <!-- Show map in both mobile and desktop view -->
      <MaplibreMap></MaplibreMap>
    </div>
  </div>
</div>
