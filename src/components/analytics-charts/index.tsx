import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs.tsx'
import DiagramsComponent from '@/components/diagrams-component'
import { ExpensesTrendChart } from '@/components/expenses-trend-chart'
import { AnalyticsChartsProps } from '@/components/analytics-charts/types.ts'

export function AnalyticsCharts({
  transactions,
  expenses,
  income,
}: AnalyticsChartsProps) {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="expensesIncome">
        <TabsList>
          <TabsTrigger value="expensesIncome">Витрати/Доходи</TabsTrigger>
          <TabsTrigger value="movingAvarage">Ковзне середнє</TabsTrigger>
        </TabsList>
        <TabsContent value="expensesIncome">
          <DiagramsComponent income={income} expenses={expenses} />
        </TabsContent>
        <TabsContent value="movingAvarage">
          <ExpensesTrendChart transactions={transactions} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AnalyticsCharts
