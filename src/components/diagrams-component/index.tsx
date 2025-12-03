import { JSX } from 'react'
import { useLocales } from '@/context/LocalesContext'
import { IncomeExpensePie } from '@/components/income-expense-pie'

type DiagramsComponentProps = {
  income: number
  expenses: number
}

function DiagramsComponent(data: DiagramsComponentProps): JSX.Element {
  const { translations } = useLocales()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-center mt-4">
          {translations.analyticsCharts.expenseIncomeTitle}
        </h2>
        <IncomeExpensePie income={data.income} expenses={data.expenses} />
      </div>
    </div>
  )
}

export default DiagramsComponent
