import { replaceSpaces } from './utils';

export interface Props {
  first: string;
  second: string;
  _first: string;
  _second: string;
  origin: string;
}

export const labels = ['Flip Names', 'Undo Changes', 'Copy Love Link', 'Home'];

export const flipNames = ({ first, second }: Partial<Props>) => {
  document.location = `${replaceSpaces(second ?? '')}-and-${replaceSpaces(
    first ?? ''
  )}`;
};

export const copyToClipboard = ({ origin, first, second }: Partial<Props>) => {
  navigator.clipboard.writeText(
    `${origin}/${replaceSpaces(first ?? '')}-and-${replaceSpaces(second ?? '')}`
  );
};

export const goHome = () => (document.location = '/');
