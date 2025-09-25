export function replaceSpaces(text: string): string {
  return text.replace(/\s+/g, '_');
}

export function replaceUnderscores(text: string): string {
  return text.replace(/_+/g, ' ');
}
