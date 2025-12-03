'use client'

import { Pie, PieChart } from 'recharts'
import { useLocales } from '@/context/LocalesContext'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart.tsx'
import { getPieData } from '@/components/income-expense-pie/helpers.ts'

type Props = {
  income: number
  expenses: number
}

const chartConfig = {
  income: {
    label: 'Income',
    color: 'var(--chart-1)',
  },
  expenses: {
    label: 'Expenses',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig

export function IncomeExpensePie({ income, expenses }: Props) {
  const { translations } = useLocales()

  const data = getPieData(translations.analyticsCharts, income, expenses)

  return (
    <div className="flex flex-col items-center gap-4">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px] w-full"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel={false} />}
          />
          <Pie data={data} dataKey="value" nameKey="label" stroke="0" />
        </PieChart>
      </ChartContainer>

      <div className="flex items-center gap-6">
        {data.map(item => (
          <div key={item.key} className="flex items-center gap-2">
            <span
              className="size-3 rounded-full"
              style={{ backgroundColor: item.fill }}
            />
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
