import { LocalesContextData } from '@/context/LocalesContext/types.ts'
import { createContext, useContext } from 'react'

export const LocalesContext = createContext<LocalesContextData | null>(null)

export const useLocales = (): LocalesContextData => {
  const data = useContext(LocalesContext)

  if (!data) {
    throw new Error('useLocales was used outside of its Provider')
  }

  return data
}
