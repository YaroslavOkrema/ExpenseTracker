import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs.tsx'
import DiagramsComponent from '@/components/diagrams-component'
import { ExpensesTrendChart } from '@/components/expenses-trend-chart'
import { AnalyticsChartsProps } from '@/components/analytics-charts/types.ts'
import { JSX } from 'react'
import { DIAGRAMS_TAB } from '@/components/analytics-charts/constants.ts'
import { useLocales } from '@/context/LocalesContext'

export function AnalyticsCharts({
  transactions,
  expenses,
  income,
}: AnalyticsChartsProps): JSX.Element {
  const { translations } = useLocales()

  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue={DIAGRAMS_TAB.movingAverage}>
        <TabsList>
          <TabsTrigger value={DIAGRAMS_TAB.movingAverage}>
            {translations.analyticsCharts.movingAverage}
          </TabsTrigger>
          <TabsTrigger value={DIAGRAMS_TAB.expensesIncome}>
            {translations.analyticsCharts.expenseIncome}
          </TabsTrigger>
        </TabsList>
        <TabsContent value={DIAGRAMS_TAB.movingAverage}>
          <ExpensesTrendChart transactions={transactions} />
        </TabsContent>
        <TabsContent value={DIAGRAMS_TAB.expensesIncome}>
          <DiagramsComponent income={income} expenses={expenses} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AnalyticsCharts
