import { pathOr } from 'ramda'
import { en } from './en'
import { de } from './de'
import { en_uk } from './en-uk'
import { es } from './es'
import { fr } from './fr'

const locales = {
  en,
  de,
  'en-uk': en_uk,
  es,
  fr
}

let language = 'en'

let country = 'us'

export const setActiveCountry = (countryCode = 'us') => (country = countryCode)

export const getActiveCountry = () => country.toLowerCase()

export const initializeLanguage = (localeLanguage = 'en') => (language = localeLanguage)

const locale = (text) => pathOr(text, [language, text], locales)

export default locale
