import en from './en.json';
import es from './es.json';

const translations = { en, es } as const;

export type Lang = keyof typeof translations;
export type Translations = typeof en;

export function useTranslations(lang: Lang): Translations {
	return translations[lang] as Translations;
}
