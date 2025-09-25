<script lang="ts">
  import Input from './Input.svelte';

  let firstName = $state('');
  let secondName = $state('');

  function onsubmit(e: SubmitEvent) {
    e.preventDefault();
    firstName = firstName.trim();
    secondName = secondName.trim();

    if (!firstName || !secondName) return;
    document.location = `/${firstName}-and-${secondName}`;
  }
</script>

<form
  {onsubmit}
  class="flex flex-col gap-2 text-lg max-w-md mx-auto bg-pink-50
  py-5 px-3 rounded border-[1.5px] border-pink-200"
>
  <Input
    id="first-name"
    label="First Name"
    placeholder="Eg: John"
    bind:value={firstName}
  ></Input>
  <Input
    id="second-name"
    label="Second Name"
    placeholder="Eg: John"
    bind:value={secondName}
  ></Input>

  <button
    class="bg-pink-700 text-white font-bold text-2xl
    py-2 rounded-full justify-self-center mt-6 cursor-pointer
    hover:bg-pink-600 transition duration-300">Check Love 💝</button
  >
</form>
