import { Language } from '@/types/enums.ts'
import { Locale } from '@/types/types.ts'

export type LocalesContextData = {
  locale: Language
  translations: Locale
  handleChangeLocale: (locale: Language) => void
}
