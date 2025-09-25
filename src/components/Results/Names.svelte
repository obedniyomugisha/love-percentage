<script lang="ts">
  import type { Props } from './index.svelte';
  import Name from './Name.svelte';

  let { first = $bindable(), second = $bindable() }: Props = $props();
</script>

<div class="flex flex-col items-center gap-2 text-4xl my-4" spellcheck="false">
  <Name bind:innerText={first} />
  <span>Loves</span>
  <Name bind:innerText={second} />
</div>
