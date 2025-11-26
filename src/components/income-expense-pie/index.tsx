import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

type Props = {
  income: number
  expenses: number
}

const COLORS = ['#4ade80', '#f87171'] // зелений = дохід, червоний = витрати

export default function IncomeExpensePie({ income, expenses }: Props) {
  const data = [
    { name: 'Дохід', value: income },
    { name: 'Витрати', value: expenses },
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
