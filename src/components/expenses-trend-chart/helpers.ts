import type { ChartConfig } from '@/components/ui/chart'
import { Locale } from '@/types/types.ts'

export const getChartConfig = (t: Locale['analyticsCharts']): ChartConfig => ({
  expense: {
    label: t.dayExpense,
    color: 'var(--chart-1)',
  },
  ma7: {
    label: t.weekExpense,
    color: 'var(--chart-2)',
  },
  ma30: {
    label: t.monthExpense,
    color: 'var(--chart-3)',
  },
})
