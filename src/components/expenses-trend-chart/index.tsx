import type { JSX } from 'react'

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import { useExpensesTrendChart } from '@/components/expenses-trend-chart/useExpensesTrendChart'
import { useLocales } from '@/context/LocalesContext'

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Info } from 'lucide-react'
import { getChartConfig } from '@/components/expenses-trend-chart/helpers.ts'
import { ExpensesTrendChartProps } from '@/components/expenses-trend-chart/types.ts'
import { MASettingsMode } from '@/utils/moving-average'

export function ExpensesTrendChart({
  transactions,
}: ExpensesTrendChartProps): JSX.Element {
  const { daily, chartData, mode, setMode, activeMethod, allModelsMetrics } = useExpensesTrendChart(transactions)
  const { translations } = useLocales()
  const chartConfig = getChartConfig(translations.analyticsCharts)
  const t = translations.analyticsCharts

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-medium flex items-center gap-2">
          {t.movingAverageTitle}
          {mode === 'AUTO' && (
            <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground">
              {activeMethod}
            </span>
          )}
        </div>
        <Select value={mode} onValueChange={(val) => setMode(val as MASettingsMode)}>
          <SelectTrigger className="w-[90px] h-7 text-xs">
            <SelectValue placeholder="Mode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="SMA" className="text-xs">SMA</SelectItem>
            <SelectItem value="EMA" className="text-xs">EMA</SelectItem>
            <SelectItem value="WMA" className="text-xs">WMA</SelectItem>
            <SelectItem value="AUTO" className="text-xs">Auto</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {mode === 'AUTO' && allModelsMetrics && (
        <div className="mb-4 rounded-lg border bg-muted/40 overflow-hidden">
          <p className="text-[10px] font-medium text-muted-foreground px-3 pt-2 pb-1 uppercase tracking-wide">
            {t.errorMetricsTitle}
          </p>
          <table className="w-full text-xs border-t">
            <thead>
              <tr className="text-muted-foreground">
                <th className="text-left px-3 py-1.5 font-semibold w-[30%]">{t.model}</th>
                <th className="text-left px-3 py-1.5 font-semibold w-[23%]">
                  <div className="flex items-center gap-1.5">
                    {t.mae}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="w-3.5 h-3.5 text-muted-foreground/70 cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t.maeTooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </th>
                <th className="text-left px-3 py-1.5 font-semibold w-[23%]">
                  <div className="flex items-center gap-1.5">
                    {t.rmse}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="w-3.5 h-3.5 text-muted-foreground/70 cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t.rmseTooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </th>
                <th className="text-left px-3 py-1.5 font-semibold w-[24%]">
                  <div className="flex items-center gap-1.5">
                    {t.mape}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="w-3.5 h-3.5 text-muted-foreground/70 cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t.mapeTooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {allModelsMetrics.map((row) => (
                <tr
                  key={row.method}
                  className={`border-t transition-colors ${
                    row.isWinner
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                      : 'text-foreground'
                  }`}
                >
                  <td className="px-3 py-1.5 font-semibold flex items-center gap-1">
                    {row.isWinner && <span aria-label="winner">🏆</span>}
                    {row.method}
                  </td>
                  <td className="px-3 py-1.5 font-mono tabular-nums whitespace-nowrap">{row.metrics.mae.toLocaleString('uk-UA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₴</td>
                  <td className="px-3 py-1.5 font-mono tabular-nums whitespace-nowrap">{row.metrics.rmse.toLocaleString('uk-UA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₴</td>
                  <td className="px-3 py-1.5 font-mono tabular-nums whitespace-nowrap">{row.metrics.mape.toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!daily.length ? (
        <>
          <p className="text-sm text-muted-foreground text-center">
            {t.noData}
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
                name={t.dayExpense}
                fill="var(--chart-1)"
                fillOpacity={0.3}
                stroke="var(--chart-1)"
                strokeWidth={2}
              />
              <Area
                type="natural"
                dataKey="ma7"
                name={t.weekExpense}
                fill="var(--chart-2)"
                fillOpacity={0.3}
                stroke="var(--chart-2)"
                strokeWidth={2}
              />
              <Area
                type="natural"
                dataKey="ma30"
                name={t.monthExpense}
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
