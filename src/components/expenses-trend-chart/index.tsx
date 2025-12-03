import type { JSX } from 'react'

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import { useExpensesTrendChart } from '@/components/expenses-trend-chart/useExpensesTrendChart'
import { useLocales } from '@/context/LocalesContext'

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { getChartConfig } from '@/components/expenses-trend-chart/helpers.ts'
import { ExpensesTrendChartProps } from '@/components/expenses-trend-chart/types.ts'

export function ExpensesTrendChart({
  transactions,
}: ExpensesTrendChartProps): JSX.Element {
  const { daily, chartData } = useExpensesTrendChart(transactions)
  const { translations } = useLocales()
  const chartConfig = getChartConfig(translations.analyticsCharts)

  return (
    <div className="mt-4">
      <div className="text-center mb-4">
        {translations.analyticsCharts.movingAverageTitle}
      </div>
      {!daily.length ? (
        <>
          <p className="text-sm text-muted-foreground text-center">
            {translations.analyticsCharts.noData}
          </p>
        </>
      ) : (
        <>
          <ChartContainer config={chartConfig} className="w-full h-[300px]">
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{ left: -10, right: 12, top: 10, bottom: 0 }}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fontSize: 12 }}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

              <Area
                type="natural"
                dataKey="expense"
                name={translations.analyticsCharts.dayExpense}
                fill="var(--chart-1)"
                fillOpacity={0.3}
                stroke="var(--chart-1)"
                strokeWidth={2}
              />
              <Area
                type="natural"
                dataKey="ma7"
                name={translations.analyticsCharts.weekExpense}
                fill="var(--chart-2)"
                fillOpacity={0.3}
                stroke="var(--chart-2)"
                strokeWidth={2}
              />
              <Area
                type="natural"
                dataKey="ma30"
                name={translations.analyticsCharts.monthExpense}
                fill="var(--chart-3)"
                fillOpacity={0.3}
                stroke="var(--chart-3)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </>
      )}
    </div>
  )
}
