import { de } from './de';
import { en } from './en';

export type Dict = typeof de;
export type Lang = 'de' | 'en';

export const dicts: Record<Lang, Dict> = { de, en };

/** Pfad-Präfix der jeweiligen Sprachfassung ('' für Deutsch, '/en' für Englisch). */
export function langPrefix(lang: Lang): string {
  return lang === 'de' ? '' : '/en';
}
