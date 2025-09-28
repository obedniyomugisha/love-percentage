<script lang="ts">
  import type { Props } from './index.svelte';
  import Name from './Name.svelte';

  let { first = $bindable(), second = $bindable() }: Props = $props();
</script>

<div
  class="flex flex-col sm:flex-row justify-center items-center
  gap-y-2 gap-x-3 text-4xl my-4"
  spellcheck="false"
>
  <Name bind:innerText={first} />
  <span>Loves</span>
  <Name bind:innerText={second} />
</div>
