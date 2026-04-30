import { browser } from '$app/environment';
import en from './en.js';
import pt from './pt.js';

export type Locale = 'pt' | 'en';

function createI18n() {
	const stored = browser ? (localStorage.getItem('lang') as Locale) : null;
	let locale = $state<Locale>(stored ?? 'pt');

	return {
		get locale() {
			return locale;
		},
		get t() {
			return locale === 'pt' ? pt : en;
		},
		toggle() {
			locale = locale === 'pt' ? 'en' : 'pt';
			if (browser) localStorage.setItem('lang', locale);
		}
	};
}

export const i18n = createI18n();
