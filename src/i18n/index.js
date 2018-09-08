import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import locale_en from './translations/en.json';
import locale_ru from './translations/ru.json';

addLocaleData([...en, ...ru]);

const messages = {
  en: {
    ...locale_en,
  },
  ru: {
    ...locale_ru,
  }
}

export default messages;
