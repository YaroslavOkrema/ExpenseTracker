import { getDailyExpenses } from '@/utils/daily-expenses'
import { movingAverage } from '@/utils/moving-average'
import { Data } from '@/types/types.ts'

export function useExpensesTrendChart(transactions: Data[]) {
  const daily = getDailyExpenses(transactions)

  const expenses = daily.map(d => d.expense)
  const ma7 = movingAverage(expenses, 7)
  const ma30 = movingAverage(expenses, 30)

  const chartData = daily.map((d, index) => ({
    date: d.date,
    expense: d.expense,
    ma7: ma7[index] ?? null,
    ma30: ma30[index] ?? null,
  }))

  return { daily, chartData }
}
