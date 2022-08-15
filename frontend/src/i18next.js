import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './assets/language/en.json';
import srb from './assets/language/srb.json';

i18next.use(initReactI18next).init({
	resources: {
		srb: {
			translation: srb
		},
		en: {
			translation: en
		}
	},
	lng: localStorage.getItem('lng') || 'srb'
});

export default i18next;
