import './App.css'
import CardPageComponent from '@/pages/CardPageComponent'
import { ThemeProvider } from '@/providers/theme'
import LocalesProvider from '@/providers/locales'
import { LocalStorageKeys, Theme } from '@/types/enums.ts'

function App() {
  return (
    <LocalesProvider>
      <ThemeProvider
        defaultTheme={Theme.LIGHT}
        storageKey={LocalStorageKeys.THEME}
      >
        <CardPageComponent />
      </ThemeProvider>
    </LocalesProvider>
  )
}

export default App
