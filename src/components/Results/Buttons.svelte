<script lang="ts">
  interface Props {
    first: string;
    second: string;
    _first: string;
    _second: string;
    origin: string;
  }

  let {
    first = $bindable(),
    second = $bindable(),
    _first,
    _second,
    origin,
  }: Props = $props();

  const labels = ['Flip Names', 'Undo Changes', 'Copy Love Link', 'Home'];
  const functions = [
    () => (document.location = `${second}-and-${first}`),
    () => {
      first = _first;
      second = _second;
    },
    () => navigator.clipboard.writeText(origin + `/${first}-and-${second}`),
    () => (document.location = '/'),
  ];
</script>

<div class="flex gap-2 flex-wrap my-7 justify-center">
  {#each labels as label, i}
    {@const onclick = functions[i]}
    {@render Button(label, onclick)}
  {/each}
</div>

{#snippet Button(text: string, onclick: (e: Event) => void)}
  <button
    {onclick}
    class="bg-pink-700 text-white font-bold text-2xl
    py-2 rounded-full cursor-pointer px-5 active:scale-90
    hover:bg-pink-600 transition duration-300">{text}</button
  >
{/snippet}

<style>
  @media (width < 32rem) {
    button {
      flex-grow: 1;
    }
  }
</style>
