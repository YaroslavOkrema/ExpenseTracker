import { Locale } from '@/types/types.ts'

export function getPieData(
  t: Locale['analyticsCharts'],
  income: number,
  expenses: number,
) {
  return [
    {
      key: 'income',
      label: t.Income,
      value: income,
      fill: 'var(--chart-1)',
    },
    {
      key: 'expenses',
      label: t.Expenses,
      value: expenses,
      fill: 'var(--chart-2)',
    },
  ]
}
