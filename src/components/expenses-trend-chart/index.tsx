import type { Data } from '@/types/types'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'
import { JSX } from 'react'
import { useExpensesTrendChart } from '@/components/expenses-trend-chart/useExpensesTrendChart.ts'
import { useLocales } from '@/context/LocalesContext'

type Props = { transactions: Data[] }

export function ExpensesTrendChart({ transactions }: Props): JSX.Element {
  const { daily, chartData } = useExpensesTrendChart(transactions)
  const { translations } = useLocales()

  return (
    <div className="mt-4">
      <div className="text-center mb-4">
        {translations.analyticsCharts.movingAverageTitle}
      </div>

      {!daily.length ? (
        <p className="text-sm text-muted-foreground text-center">
          {translations.analyticsCharts.noData}
        </p>
      ) : (
        <div className="h-[300px] w-full text-foreground">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(148, 163, 184, 0.3)"
              />
              <XAxis
                dataKey="date"
                stroke="currentColor"
                tick={{ fontSize: 12 }}
              />
              <YAxis stroke="currentColor" tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--popover))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 8,
                }}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="expense"
                name={translations.analyticsCharts.dayExpense}
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="ma7"
                name={translations.analyticsCharts.weekExpense}
                stroke="#82ca9d"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="ma30"
                name={translations.analyticsCharts.monthExpense}
                stroke="#ffb347"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}
