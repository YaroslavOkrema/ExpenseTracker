import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { JSX } from 'react'
import { useLocales } from '@/context/LocalesContext'

type Props = {
  income: number
  expenses: number
}

const COLORS = ['#4ade80', '#f87171']

export default function IncomeExpensePie({
  income,
  expenses,
}: Props): JSX.Element {
  const { translations } = useLocales()
  const data = [
    { name: translations.analyticsCharts.Income, value: income },
    { name: translations.analyticsCharts.Expenses, value: expenses },
  ]

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
            label
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
