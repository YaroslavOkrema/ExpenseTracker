import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { Label } from '@/components/ui/label.tsx'
import { Button } from '@/components/ui/button.tsx'
import FormComponent from '@/components/FormComponent'
import TableComponent from '@/components/TableComponent'
import { useCardPage } from '@/pages/CardPage/useCardPage.ts'

function CardComponent() {
  const {
    transactions,
    toggleShowForm,
    showForm,
    setTransaction,
    setShowForm,
  } = useCardPage()

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
            <FormComponent
              setShowForm={setShowForm}
              setTransaction={setTransaction}
            />
          ) : (
            <div>
              <Label className="mb-4">Список транзакцій</Label>
              <TableComponent transactions={transactions} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default CardComponent
