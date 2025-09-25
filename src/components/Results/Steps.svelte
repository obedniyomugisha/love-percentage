<script lang="ts">
  interface Props {
    steps: number[];
  }

  const { steps }: Props = $props();
</script>

<div
  class="space-y-2 my-3 mb-5 text-center text-2xl
  border-t-red-400 w-fit mx-auto pt-2 border-t-2"
>
  {#each steps as step, i}
    {@render Step(step, i === steps.length - 1)}
  {/each}
</div>

{#snippet Step(num: number, last: boolean)}
  <p class:last class="line-clamp-1">
    {#if last}
      💝{num}💝
    {:else}
      {String(num).split('').join('💖')}
    {/if}
  </p>
{/snippet}

<style>
  .last {
    font-size: var(--text-5xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-red-700);
  }
</style>
