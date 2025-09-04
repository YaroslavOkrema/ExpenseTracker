import './App.css'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Label } from '@/components/ui/label.tsx'

function App() {
  return (
    <div className="flex justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center">Мій бюджет</CardTitle>
          <Label>Баланс: 3500 грн</Label>
          <div className="flex gap-4 mb-4">
            <Label>Доходи: 5000 грн</Label>
            <Label>Витрати: 3500 грн</Label>
          </div>
          <Button variant="link">Додати транзакцію</Button>
        </CardHeader>
        <CardContent>
          <Label>Список транзакцій:</Label>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
