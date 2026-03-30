import en from './en.js';
import pt from './pt.js';

export type Locale = 'pt' | 'en';

function createI18n() {
	const stored =
		typeof localStorage !== 'undefined' ? (localStorage.getItem('lang') as Locale) : null;
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
			if (typeof localStorage !== 'undefined') localStorage.setItem('lang', locale);
		}
	};
}

export const i18n = createI18n();
