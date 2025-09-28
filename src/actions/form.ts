import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { replaceSpaces } from '../lib/utils';

const zName = z.string().trim().min(1);

export const submitForm = defineAction({
  accept: 'form',
  input: z.object({
    firstName: zName,
    secondName: zName,
  }),
  handler: async ({ firstName, secondName }) => {
    firstName = replaceSpaces(firstName);
    secondName = replaceSpaces(secondName);

    return `/${firstName}-and-${secondName}`;
  },
});
