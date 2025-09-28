<script lang="ts">
  import Title from '@components/Results/Title.svelte';
  import calculateLovePercentage from '@lib/percentage';
  import Names from '@components/Results/Names.svelte';
  import Buttons from '@components/Results/Buttons.svelte';
  import Steps from '@components/Results/Steps.svelte';

  export interface Props {
    first: string;
    second: string;
  }

  const {
    first: _first,
    second: _second,
    origin,
  }: Props & { origin: string } = $props();

  let first = $state(_first);
  let second = $state(_second);

  let steps = $derived(calculateLovePercentage(first.trim(), second.trim()));
  let title = $derived(`${first} Loves ${second} ${steps.at(-1) ?? 0}%`);
</script>

<Title {title}></Title>
<Buttons {_first} {_second} bind:first bind:second {origin}></Buttons>
<Names bind:first bind:second></Names>
<Steps {steps}></Steps>
