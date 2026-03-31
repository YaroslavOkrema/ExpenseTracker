import { getDailyExpenses } from '@/utils/daily-expenses'
import { getMovingAverage, autoSelectBestMA } from '@/utils/moving-average'
import { Data } from '@/types/types.ts'
import { useMASettings } from '@/hooks/useMASettings.ts'

export function useExpensesTrendChart(transactions: Data[]) {
  const daily = getDailyExpenses(transactions)
  const expenses = daily.map(d => d.expense)

  const { mode, setMode } = useMASettings()

  let ma7: number[] = []
  let ma30: number[] = []
  let activeMethod = mode

  if (expenses.length > 0) {
    if (mode === 'AUTO') {
      const best7 = autoSelectBestMA(expenses, 7)
      const best30 = autoSelectBestMA(expenses, 30)
      ma7 = best7.result
      ma30 = best30.result
      // Display the winner for the short-term forecast
      activeMethod = best7.bestMethod 
    } else {
      ma7 = getMovingAverage(expenses, 7, mode)
      ma30 = getMovingAverage(expenses, 30, mode)
    }
  }

  const chartData = daily.map((d, index) => ({
    date: d.date,
    expense: d.expense,
    ma7: ma7[index] ?? null,
    ma30: ma30[index] ?? null,
  }))

  return { daily, chartData, mode, setMode, activeMethod }
}
