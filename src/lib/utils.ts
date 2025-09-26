export function replaceSpaces(text: string): string {
  return text.replace(/\s+/g, '_');
}

export function replaceUnderscores(text: string): string {
  return text.replace(/_+/g, ' ');
}

export function extractMetaImageTag(metaTag: string): { url: string } | null {
  const regex = /<meta\s+property="og:image"\s+content="([^"]+)"/;
  const match = metaTag.match(regex);

  if (match && match[1]) {
    return { url: match[1] };
  }

  return null;
}
