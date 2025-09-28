<script lang="ts">
  import type { Props } from '@components/Results/index.svelte';
  import Name from '@components/Results/Name.svelte';

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
