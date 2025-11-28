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
import AnalyticsCharts from '@/components/analytics-charts'
import { TABS } from '@/constants/constants.ts'
import MoneyIcon from '@/icons/money'
import TransactionIcon from '@/icons/transaction'
import AnalyticsIcon from '@/icons/analytics'
import DiagramsIcon from '@/icons/diagrams'
import SettingsIcon from '@/icons/settings'

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
    avgExpense7,
    avgExpense30,
    transactions,
  } = useCardPageComponent()

  return (
    <div className="flex justify-center items-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue={TABS.expense}>
          <TabsList>
            <TabsTrigger className="cursor-pointer" value={TABS.expense}>
              {locale.trackerTab}
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value={TABS.analytics}>
              {locale.analyticsTab}
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value={TABS.diagrams}>
              {locale.diagramsTab}
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value={TABS.settings}>
              {locale.settingsTab}
            </TabsTrigger>
          </TabsList>
          <TabsContent value={TABS.expense}>
            <Card className="h-[555px]">
              <CardHeader>
                <CardTitle className="text-center text-xl mb-4">
                  <div className="flex justify-center items-center gap-2">
                    <MoneyIcon />
                    {locale.title}
                  </div>
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
                    <Label className="mb-4">
                      <div className="flex justify-center items-center gap-2">
                        <TransactionIcon />
                        {locale.listTitle}
                      </div>
                    </Label>
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
          <TabsContent value={TABS.analytics}>
            <Card className="h-[555px]">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-2">
                    <AnalyticsIcon />
                    <p className="text-lg">{locale.analyticsTab}</p>
                  </div>
                </CardTitle>
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
                  avgExpense7={avgExpense7}
                  avgExpense30={avgExpense30}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value={TABS.settings}>
            <Card className="h-[555px]">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-2">
                    <SettingsIcon />
                    <p className="text-lg">{locale.settingsTab}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ThemeSelect />
                <LanguageSelect />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value={TABS.diagrams}>
            <Card className="h-[555px]">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-2">
                    <DiagramsIcon />
                    <p className="text-lg">{locale.diagramsTab}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AnalyticsCharts
                  transactions={transactions}
                  income={income}
                  expenses={expenses}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default CardPageComponent
