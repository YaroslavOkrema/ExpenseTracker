import './App.css'
import CardPageComponent from '@/pages/CardPageComponent'
import { ThemeProvider } from '@/providers/theme'
import LocalesProvider from '@/providers/locales'

function App() {
  return (
    <LocalesProvider>
      <ThemeProvider defaultTheme="light" storageKey="theme">
        <CardPageComponent />
      </ThemeProvider>
    </LocalesProvider>
  )
}

export default App
