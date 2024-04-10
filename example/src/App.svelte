<script>
  import EsriMap from "./lib/EsriMap.svelte";
  import MaplibreMap from "./lib/MaplibreMap.svelte";
  import CodeEditor from "./lib/Monaco/CodeEditor.svelte";
</script>

<div class="flex flex-col md:flex-row h-screen">
  <!-- CODE EDITOR 1 -->
  <div class="flex-1 flex flex-col">
    <div class="flex-1 p-4 overflow-auto bg-gray-50">
      <CodeEditor content={`{"key":"value"}`} language="json"></CodeEditor>
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
      <CodeEditor content={`{"key":"value"}`} language="json"></CodeEditor>
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
