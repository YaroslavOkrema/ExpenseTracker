import type { Data } from '@/types/types'
import { getDailyExpenses } from '@/utils/daily-expenses'
import { movingAverage } from '@/utils/moving-average'
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

type Props = { transactions: Data[] }

export function ExpensesTrendChart({ transactions }: Props) {
  const daily = getDailyExpenses(transactions)

  if (!daily.length) {
    return (
      <p className="text-sm text-muted-foreground">Немає даних для графіка</p>
    )
  }

  const expenses = daily.map(d => d.expense)
  const ma7 = movingAverage(expenses, 7)

  const chartData = daily.map((d, index) => ({
    date: d.date,
    expense: d.expense,
    ma7: ma7[index] ?? null,
  }))

  return (
    <div className="h-[300px] w-full text-foreground">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(148, 163, 184, 0.3)"
          />
          <XAxis dataKey="date" stroke="currentColor" tick={{ fontSize: 12 }} />
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
            name="Витрати за день"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="ma7"
            name="7-денне ковзне середнє"
            stroke="#82ca9d"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
