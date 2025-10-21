<script lang="ts">
  import {
    type Props,
    copyToClipboard,
    flipNames,
    goHome,
    labels,
  } from '@lib/buttons';
  import Button from '@components/Results/Button.svelte';
  import { fade } from 'svelte/transition';

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

  let divHeight = $state(48);
  let collapse = $state(true);
</script>

{#if divHeight > 48}
  {@const id = 'collapse'}

  <input
    type="checkbox"
    class="size-5 hidden"
    name={id}
    {id}
    bind:checked={collapse}
  />

  <label
    class="text-2xl cursor-pointer font-semibold bg-pink-50 py-1 block text-center w-full"
    for={id}>{!collapse ? 'Hide' : 'Show'} Actions</label
  >
{/if}

{#if divHeight <= 48 || (divHeight > 48 && !collapse)}
  {@render Div()}
{/if}

{#snippet Div()}
  <div
    bind:clientHeight={divHeight}
    class="flex gap-2 flex-wrap my-7 justify-center"
    transition:fade
  >
    {#each labels as label, i}
      {@const onclick = functions[i]}
      <Button text={label} {onclick}></Button>
    {/each}
  </div>
{/snippet}
