import './App.css'
import CardPageComponent from '@/pages/CardPageComponent'
import { ThemeProvider } from '@/providers/theme'
import LocalesProvider from '@/providers/locales'
import { LocalStorageKeys, Theme } from '@/types/enums.ts'
import { Toaster } from 'sonner'

function App() {
  return (
    <LocalesProvider>
      <ThemeProvider
        defaultTheme={Theme.LIGHT}
        storageKey={LocalStorageKeys.THEME}
      >
        <CardPageComponent />
        <Toaster />
      </ThemeProvider>
    </LocalesProvider>
  )
}

export default App
