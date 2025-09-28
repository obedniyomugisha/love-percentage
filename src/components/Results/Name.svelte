<script lang="ts">
  interface Props {
    innerText: string;
  }

  let { innerText = $bindable() }: Props = $props();
</script>

<span
  class="font-bold text-pink-900 bg-gray-50 outline-[1.5px] py-1.5
  px-2 rounded outline-gray-300 focus:outline-pink-300"
  bind:innerText
  contenteditable
>
  {innerText}
</span>
