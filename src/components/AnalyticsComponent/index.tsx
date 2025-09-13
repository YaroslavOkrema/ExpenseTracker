type AnalyticsComponentProps = {
  income: number
  expenses: number
  expenseRatio: number
  savingRates: number
  maxIncome: number
  maxExpense: number
}

function AnalyticsComponent({
  income,
  expenses,
  expenseRatio,
  savingRates,
  maxIncome,
  maxExpense,
}: AnalyticsComponentProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span>Доходи:</span>
        <span>{income} грн</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Витрати:</span>
        <span>{expenses} грн</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Витрати від доходу (%):</span>
        <span>{expenseRatio} %</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Заощадження (%):</span>
        <span>{savingRates} %</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Найбільший дохід:</span>
        <span>{maxIncome} грн</span>
      </div>
      <div className="flex justify-between">
        <span>Найбільша витрата:</span>
        <span>{maxExpense} грн</span>
      </div>
    </div>
  )
}

export default AnalyticsComponent
