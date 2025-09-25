<script lang="ts">
  interface Props {
    id: string;
    label: string;
    placeholder: string;
    value: string;
  }

  let { id, label, placeholder, value = $bindable() }: Props = $props();
</script>

<div class="flex flex-col gap-1">
  <label for={id} class="font-semibold">{label}</label>
  <input
    type="text"
    {id}
    {placeholder}
    class="bg-white py-2 px-1.5 rounded-lg"
    bind:value
  />
</div>
