<script lang="ts">
  interface Props {
    text: string;
    onclick: (e: Event) => void;
  }

  const { text, onclick }: Props = $props();
</script>

<button
  {onclick}
  class="bg-pink-700 text-white font-bold text-2xl
    py-2 rounded-full cursor-pointer px-5 active:scale-90
    hover:bg-pink-600 transition duration-300">{text}</button
>

<style>
  @media (width < 32rem) {
    button {
      flex-grow: 1;
    }
  }
</style>
