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
import { useCardPageComponent } from '@/pages/CardPageComponent/useCardPageComponent.ts'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs.tsx'

function CardPageComponent() {
  const {
    transactions,
    toggleShowForm,
    showForm,
    setTransaction,
    setShowForm,
    income,
    expenses,
    balance,
  } = useCardPageComponent()

  return (
    <div className="flex justify-center items-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="expense">
          <TabsList>
            <TabsTrigger value="expense">Expense Tracker</TabsTrigger>
            <TabsTrigger value="analytics">Аналітика</TabsTrigger>
          </TabsList>
          <TabsContent value="expense">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle className="text-center">Мій бюджет</CardTitle>
                <Label>Баланс: {balance} грн</Label>
                <div className="flex gap-4 mb-4">
                  <Label>Доходи: {income} грн</Label>
                  <Label>Витрати: {expenses} грн</Label>
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
          </TabsContent>
          <TabsContent value="analytics">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Login to your account</CardTitle>
              </CardHeader>
              <CardContent>
                <div>Soon...</div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default CardPageComponent
