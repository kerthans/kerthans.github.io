import type { CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/config';

export type WorkEntry = CollectionEntry<'work'>;

export function workSlug(entry: WorkEntry): string {
  const fileName = entry.id.split('/').at(-1) ?? entry.id;
  return fileName.replace(/\.mdx$/, '');
}

export function workDetailPath(locale: Locale, entry: WorkEntry): string {
  const slug = workSlug(entry);
  return locale === 'en' ? `/en/work/${slug}` : `/work/${slug}`;
}

export function sortWorkEntries(entries: WorkEntry[]): WorkEntry[] {
  return entries.toSorted((a, b) => a.data.order - b.data.order);
}
