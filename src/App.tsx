import './App.css'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Label } from '@/components/ui/label.tsx'
import { useState } from 'react'
import { Input } from '@/components/ui/input.tsx'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'

type FormData = {
  description: string
  sum: number
  type: string
}

function App() {
  const { register, handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      description: '',
      sum: 0,
      type: '',
    },
  })
  const [showForm, setShowForm] = useState<boolean>(false)

  const toggleShowForm = () => {
    setShowForm(prev => !prev)
  }

  const hamdleSubmit: SubmitHandler<FormData> = data => {
    console.log(data)
  }

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
          <Button
            className="cursor-pointer"
            variant="link"
            onClick={toggleShowForm}
          >
            {showForm ? 'Закрити' : 'Додати транзакцію'}
          </Button>
        </CardHeader>
        <CardContent>
          {showForm ? (
            <form
              onSubmit={handleSubmit(hamdleSubmit)}
              className="flex flex-col gap-2"
            >
              <Label>Опис</Label>
              <Input
                title="text"
                {...register('description')}
                placeholder="Наприклад: Продукти"
              />

              <Label>Сума</Label>
              <Input title="number" {...register('sum')} placeholder="1000" />

              <Label>Тип</Label>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Дохід" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="income">Дохід</SelectItem>
                      <SelectItem value="expense">Витрата</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />

              <Button className="mt-2">Зберегти</Button>
            </form>
          ) : (
            <div>
              <Label>Список транзакцій:</Label>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default App
