import './App.css'
import CardPageComponent from '@/pages/CardPageComponent'
import { ThemeProvider } from '@/providers/theme'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <CardPageComponent />
    </ThemeProvider>
  )
}

export default App
