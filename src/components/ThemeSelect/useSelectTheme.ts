import { useTheme } from '@/providers/theme'
import { Theme } from '@/types/enums.ts'

export function useSelectTheme() {
  const { setTheme } = useTheme()

  function handleDark() {
    setTheme(Theme.DARK)
  }

  function handleLight() {
    setTheme(Theme.LIGHT)
  }

  function handleSystem() {
    setTheme(Theme.SYSTEM)
  }

  return { handleDark, handleLight, handleSystem }
}
