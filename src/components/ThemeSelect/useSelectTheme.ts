import { Theme } from '@/types/enums.ts'
import { useTheme } from '@/hooks/useTheme.ts'
import { useLocales } from '@/context/LocalesContext'

export function useSelectTheme() {
  const { setTheme } = useTheme()
  const { translations } = useLocales()

  function handleDark() {
    setTheme(Theme.DARK)
  }

  function handleLight() {
    setTheme(Theme.LIGHT)
  }

  function handleSystem() {
    setTheme(Theme.SYSTEM)
  }

  return {
    handleDark,
    handleLight,
    handleSystem,
    locale: translations.settings,
  }
}
