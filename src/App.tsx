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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table.tsx'

type FormData = {
  description: string
  sum: number
  type: string
}

function App() {
  const { register, handleSubmit, control, reset } = useForm<FormData>({
    defaultValues: {
      description: '',
      sum: 0,
      type: '',
    },
  })

  const [showForm, setShowForm] = useState<boolean>(false)
  const [transactions, setTransaction] = useState<FormData[]>([])

  const toggleShowForm = () => {
    setShowForm(prev => !prev)
  }

  const hamdleSubmit: SubmitHandler<FormData> = data => {
    setTransaction(prev => [...prev, data])
    reset()
    setShowForm(false)
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
              <Label className="mb-4">Список транзакцій</Label>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">Опис</TableHead>
                    <TableHead>Тип</TableHead>
                    <TableHead className="text-right">Сума</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={3}
                        className="text-center text-gray-500"
                      >
                        Немає транзакцій
                      </TableCell>
                    </TableRow>
                  ) : (
                    transactions.map((transaction, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {transaction.description}
                        </TableCell>
                        <TableCell>
                          {transaction.type === 'income' ? 'Дохід' : 'Витрата'}
                        </TableCell>
                        <TableCell className="text-right">
                          {transaction.sum} грн
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default App
