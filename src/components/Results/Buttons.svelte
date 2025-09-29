<script lang="ts">
  import {
    type Props,
    copyToClipboard,
    flipNames,
    goHome,
    labels,
  } from '@lib/buttons';
  import Button from '@components/Results/Button.svelte';

  let {
    first = $bindable(),
    second = $bindable(),
    _first,
    _second,
    origin,
  }: Props = $props();

  const functions = [
    () => flipNames({ first, second }),
    () => {
      first = _first;
      second = _second;
    },
    () => copyToClipboard({ origin, first, second }),
    () => goHome(),
  ];
</script>

<div class="flex gap-2 flex-wrap my-7 justify-center">
  {#each labels as label, i}
    {@const onclick = functions[i]}
    <Button text={label} {onclick}></Button>
  {/each}
</div>
