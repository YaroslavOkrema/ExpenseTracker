import { useCallback, useMemo, useState } from 'react'
import { Language, LocalStorageKeys } from '@/types/enums.ts'
import { Locale } from '@/types/types.ts'
import { TRANSLATIONS } from '@/constants/constants.ts'
import { LocalesContextData } from '@/context/LocalesContext/types.ts'
import { LocalesContext } from '@/context/LocalesContext'

const LocalesProvider = ({ ...props }) => {
  const [locale, setLocale] = useState<Language>(
    (localStorage.getItem(LocalStorageKeys.LOCALE) as Language) || Language.EN,
  )
  const [translations, setTranslations] = useState<Locale>(TRANSLATIONS[locale])

  const handleChangeLocale = useCallback(
    (newLocale: Language): void => {
      if (newLocale === locale) return
      setLocale(newLocale)
      setTranslations(TRANSLATIONS[newLocale])
      localStorage.setItem(LocalStorageKeys.LOCALE, newLocale)
    },
    [locale],
  )

  const localesContextData: LocalesContextData = useMemo(
    () => ({
      locale,
      translations,
      handleChangeLocale,
    }),
    [locale, translations, handleChangeLocale],
  )

  return <LocalesContext.Provider value={localesContextData} {...props} />
}

export default LocalesProvider
