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
import AnalyticsComponent from '@/components/AnalyticsComponent'
import { formatNumbers } from '@/utils/formatNumbers/formatNumbers.ts'
import LanguageSelect from '@/components/LanguageSelect'
import DiagramsComponent from '@/components/diagrams-component'

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
    expenseRatio,
    savingRates,
    maxIncome,
    maxExpense,
    locale,
    monthlyIncome,
    monthlyExpenses,
  } = useCardPageComponent()

  return (
    <div className="flex justify-center items-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="expense">
          <TabsList>
            <TabsTrigger value="expense">{locale.trackerTab}</TabsTrigger>
            <TabsTrigger value="analytics">{locale.analyticsTab}</TabsTrigger>
            <TabsTrigger value="settings">{locale.settingsTab}</TabsTrigger>
            <TabsTrigger value="diagrams">Діаграми</TabsTrigger>
          </TabsList>
          <TabsContent value="expense">
            <Card className="w-md">
              <CardHeader>
                <CardTitle className="text-center text-xl mb-4">
                  {locale.title}
                </CardTitle>
                <div className="text-4xl text-center mb-4">
                  {formatNumbers(balance)} ₴
                </div>
                <Button className="cursor-pointer" onClick={toggleShowForm}>
                  {showForm ? locale.buttonClose : locale.buttonAdd}
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
                    <Label className="mb-4">{locale.listTitle}</Label>
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
                <CardTitle>{locale.analyticsTab}</CardTitle>
              </CardHeader>
              <CardContent>
                <AnalyticsComponent
                  income={income}
                  expenses={expenses}
                  expenseRatio={expenseRatio}
                  savingRates={savingRates}
                  maxIncome={maxIncome}
                  maxExpense={maxExpense}
                  monthlyIncome={monthlyIncome}
                  monthlyExpense={monthlyExpenses}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>{locale.settingsTab}</CardTitle>
              </CardHeader>
              <CardContent>
                <ThemeSelect />
                <LanguageSelect />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="diagrams">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Діаграми</CardTitle>
              </CardHeader>
              <CardContent>
                <DiagramsComponent income={income} expenses={expenses} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default CardPageComponent
