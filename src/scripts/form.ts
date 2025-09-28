import { actions, isInputError } from 'astro:actions';

const form = document.querySelector('form');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const { error, data } = await actions.submitForm(formData);

  if (!error) document.location = data;
  else {
    const inputErrors = isInputError(error) ? error.fields : {};

    for (const id in inputErrors) {
      document.getElementById(id)?.classList.add('error');
    }
  }
});
