import {
  FormattedMessage as FormattedMessageIntl,
  createIntl,
  RawIntlProvider,
} from 'react-intl';

import ru from './ru.json';
import en from './en.json';

const locales = new Map([
  ['en', en],
  ['ru', ru],
]);
const defaultLocale = 'ru';

const locale =
  (window?.localStorage?.getItem('locale')) || defaultLocale;


export const FormattedMessage = ({ id }) => (
  <FormattedMessageIntl id={id} />
);

export const intl = createIntl({ locale, messages: locales.get(locale) })

export const LocalesProvider = ({ children }) => (
  <RawIntlProvider value={intl}>
    {children}
  </RawIntlProvider>
);
