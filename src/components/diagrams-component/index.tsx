import IncomeExpensePie from '@/components/income-expense-pie'

type DiagramsComponentProps = {
  income: number
  expenses: number
}

function DiagramsComponent(data: DiagramsComponentProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-center">Діаграма витрат/доходів</h2>
        <IncomeExpensePie income={data.income} expenses={data.expenses} />
      </div>
    </div>
  )
}

export default DiagramsComponent
