<!-- CodeEditor.svelte -->
<script lang="ts">
  import loader from "@monaco-editor/loader";
  import { onDestroy, onMount } from "svelte";
  import type * as Monaco from "monaco-editor/esm/vs/editor/editor.api";
  import { createEventDispatcher } from "svelte";

  export let content: string = ""; // Default content as empty string
  export let language: string = "javascript"; // Default language

  let editor: Monaco.editor.IStandaloneCodeEditor;
  let monaco: typeof Monaco;
  let editorContainer: HTMLElement;
  const dispatch = createEventDispatcher();

  onMount(async () => {
    // Initialize the loader with the configuration if needed
    loader.config({
      paths: {
        vs: "https://unpkg.com/monaco-editor/min/vs", // Adjust as needed
      },
    });

    monaco = await loader.init();

    editor = monaco.editor.create(editorContainer, {
      value: content,
      language: language,
      theme: "vs-light", // Optional: specify the editor's theme
    });
  });
  // Reactive content update
  $: if (editor) {
    editor.setValue(content);
  }

  onDestroy(() => {
    editor.getModel()?.dispose(); // Dispose the model explicitly
    editor.dispose(); // Dispose the editor instance
  });

  // Watch for changes in the editor content and emit an event
  $: if (editor) {
    editor.onDidChangeModelContent(() => {
      const updatedContent = editor.getValue();
      dispatch("change", updatedContent);
    });
  }
</script>

<div bind:this={editorContainer} class="editor-container"></div>

<style>
  .editor-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
