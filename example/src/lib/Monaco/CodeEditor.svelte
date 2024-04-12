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
  let editorContent = content; // Initializes editor content with external content
  const dispatch = createEventDispatcher();

  onMount(async () => {
    monaco = await loader.init();
    editor = monaco.editor.create(editorContainer, {
      automaticLayout: true,
      value: content,
      language: language || "json",
      theme: "vs-light",
    });

    editor.onDidChangeModelContent(() => {
      const currentValue = editor.getValue();
      if (currentValue !== editorContent) {
        editorContent = currentValue;
        dispatch("change", editorContent);
      }
    });
  });

  $: if (editor && content !== editor.getValue()) {
    editor.setValue(content);
  }

  onDestroy(() => {
    editor.getModel()?.dispose();
    editor.dispose();
  });
</script>

<div bind:this={editorContainer} class="editor-container"></div>

<style>
  .editor-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
