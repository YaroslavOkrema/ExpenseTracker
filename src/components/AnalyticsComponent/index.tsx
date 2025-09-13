import { useLocales } from '@/context/LocalesContext'

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
  const { translations } = useLocales()

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span>{translations.analytics.income}:</span>
        <span>
          {income} {translations.analytics.currency}
        </span>
      </div>
      <div className="flex justify-between mb-2">
        <span>{translations.analytics.expenses}:</span>
        <span>
          {expenses} {translations.analytics.currency}
        </span>
      </div>
      <div className="flex justify-between mb-2">
        <span>{translations.analytics.expenseRatio}:</span>
        <span>{expenseRatio} %</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>{translations.analytics.savingRates}:</span>
        <span>{savingRates} %</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>{translations.analytics.maxIncome}:</span>
        <span>
          {maxIncome} {translations.analytics.currency}
        </span>
      </div>
      <div className="flex justify-between">
        <span>{translations.analytics.maxExpense}:</span>
        <span>
          {maxExpense} {translations.analytics.currency}
        </span>
      </div>
    </div>
  )
}

export default AnalyticsComponent
