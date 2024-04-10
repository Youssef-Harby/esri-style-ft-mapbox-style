<!-- CodeEditor.svelte -->
<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import type * as Monaco from "monaco-editor/esm/vs/editor/editor.api";

  export let content: string; // Add this line to accept content as a prop
  export let language: string = "json"; // You can also pass the language as a prop

  let editor: Monaco.editor.IStandaloneCodeEditor;
  let monaco: typeof Monaco;
  let editorContainer: HTMLElement;

  onMount(async () => {
    monaco = (await import("./monaco")).default;

    editor = monaco.editor.create(editorContainer, {
      value: content,
      language: language,
      // Add other options here as needed
    });
  });

  onDestroy(() => {
    editor?.getModel()?.dispose();
    editor?.dispose();
  });
</script>

<div class="w-full h-full" bind:this={editorContainer} />
