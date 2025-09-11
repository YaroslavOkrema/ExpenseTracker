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

import PaginationComponent from '@/components/PaginationComponent/PaginationComponent.tsx'
import ThemeSelect from '@/components/ThemeSelect'

function CardPageComponent() {
  const {
    toggleShowForm,
    showForm,
    setTransaction,
    setShowForm,
    income,
    expenses,
    balance,
    removeTransactions,
    paginatedTransactions,
    page,
    pageNumbers,
    handleNextClick,
    handlePrevClick,
    handleNumberClick,
  } = useCardPageComponent()

  return (
    <div className="flex justify-center items-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="expense">
          <TabsList>
            <TabsTrigger value="expense">Expense Tracker</TabsTrigger>
            <TabsTrigger value="analytics">Аналітика</TabsTrigger>
            <TabsTrigger value="settings">Налаштування</TabsTrigger>
          </TabsList>
          <TabsContent value="expense">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle className="text-center text-xl">
                  Мій бюджет
                </CardTitle>
                <Label className="text-lg">Баланс: {balance} грн</Label>
                <div className="flex gap-4 mb-4">
                  <Label className="text-base">Доходи: {income} грн</Label>
                  <Label className="text-base">Витрати: {expenses} грн</Label>
                </div>
                <Button className="cursor-pointer" onClick={toggleShowForm}>
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
                    <TableComponent
                      transactions={paginatedTransactions}
                      removeTransaction={removeTransactions}
                    />
                    <PaginationComponent
                      page={page}
                      pageNumbers={pageNumbers}
                      handlePrevClick={handlePrevClick}
                      handleNextClick={handleNextClick}
                      handleNumberClick={handleNumberClick}
                    />
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
          <TabsContent value="settings">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Налаштування</CardTitle>
              </CardHeader>
              <CardContent>
                <ThemeSelect />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default CardPageComponent
