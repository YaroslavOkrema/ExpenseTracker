import { ThemeProviderState } from '@/providers/theme/types.ts'
import { createContext } from 'react'

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
}

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState)
