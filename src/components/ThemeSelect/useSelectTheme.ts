import { Theme } from '@/types/enums.ts'
import { useTheme } from '@/hooks/useTheme.ts'

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
