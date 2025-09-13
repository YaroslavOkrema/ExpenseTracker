import { useMemo, useState } from 'react'
import { Language } from '@/types/enums.ts'
import { Locale } from '@/types/types.ts'
import { TRANSLATIONS } from '@/constants/constants.ts'
import { LocalesContextData } from '@/context/LocalesContext/types.ts'
import { LocalesContext } from '@/context/LocalesContext'

const LocalesProvider = ({ ...props }) => {
  const [locale, setLocale] = useState<Language>(
    (localStorage.getItem('locale') as Language) || Language.EN,
  )
  const [translations, setTranslations] = useState<Locale>(TRANSLATIONS[locale])

  const handleChangeLocale = (locale: Language): void => {
    setLocale(locale)
    setTranslations(TRANSLATIONS[locale])
    localStorage.setItem('locale', locale)
  }

  const localesContextData: LocalesContextData = useMemo(
    () => ({
      locale,
      translations,
      handleChangeLocale,
    }),
    [locale, translations],
  )

  return <LocalesContext.Provider value={localesContextData} {...props} />
}

export default LocalesProvider
