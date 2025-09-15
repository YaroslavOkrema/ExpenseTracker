import { AnalyticsComponentProps } from '@/components/AnalyticsComponent/types.ts'
import { Locale } from '@/types/types.ts'

export function analyticsData(
  data: AnalyticsComponentProps,
  locale: Locale['analytics'],
) {
  const { income, expenses, expenseRatio, savingRates, maxIncome, maxExpense } =
    data
  return [
    {
      label: locale.income,
      value: `${income} ${locale.currency}`,
    },
    {
      label: locale.expenses,
      value: `${expenses} ${locale.currency}`,
    },
    {
      label: locale.expenseRatio,
      value: `${expenseRatio} %`,
    },
    {
      label: locale.savingRates,
      value: `${savingRates} %`,
    },
    {
      label: locale.maxIncome,
      value: `${maxIncome} ${locale.currency}`,
    },
    {
      label: locale.maxExpense,
      value: `${maxExpense} ${locale.currency}`,
    },
  ]
}
