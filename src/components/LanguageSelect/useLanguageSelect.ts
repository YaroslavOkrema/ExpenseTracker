import { useLocales } from '@/context/LocalesContext'

export function useLanguageSelect() {
  const { locale, handleChangeLocale, translations } = useLocales()

  return { locale, handleChangeLocale, locales: translations.settings }
}
