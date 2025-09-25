<script lang="ts">
  interface Props {
    innerText: string;
  }

  let { innerText = $bindable() }: Props = $props();
</script>

<!-- svelte-ignore a11y_autofocus -->
<span
  class="font-bold text-pink-900 outline-0"
  autofocus
  bind:innerText
  contenteditable>{innerText}</span
>
