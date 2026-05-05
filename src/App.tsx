import './App.css'
import CardPageComponent from '@/pages/CardPageComponent'
import { ThemeProvider } from '@/providers/theme'
import LocalesProvider from '@/providers/locales'
import { LocalStorageKeys, Theme } from '@/types/enums.ts'
import { Toaster } from 'sonner'
import { TooltipProvider } from '@/components/ui/tooltip'

function App() {
  return (
    <LocalesProvider>
      <ThemeProvider
        defaultTheme={Theme.LIGHT}
        storageKey={LocalStorageKeys.THEME}
      >
        <TooltipProvider>
          <CardPageComponent />
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </LocalesProvider>
  )
}

export default App
