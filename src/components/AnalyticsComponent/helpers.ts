import { AnalyticsComponentProps } from '@/components/AnalyticsComponent/types.ts'
import { Locale } from '@/types/types.ts'

const formatCurrency = (value: number) => {
  return value.toLocaleString('uk-UA', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export function analyticsData(
  data: AnalyticsComponentProps,
  locale: Locale['analytics'],
) {
  const {
    income,
    expenses,
    expenseRatio,
    savingRates,
    maxIncome,
    maxExpense,
    monthlyIncome,
    monthlyExpense,
    avgExpense7,
    avgExpense30,
    predictedTomorrow,
    predictedWeek,
    predictedMonth,
  } = data

  return [
    {
      id: 'basic',
      title: locale.basicAnalytics,
      fields: [
        { label: locale.income, value: `${income} ${locale.currency}` },
        { label: locale.expenses, value: `${expenses} ${locale.currency}` },
        { label: locale.expenseRatio, value: `${expenseRatio} %` },
        { label: locale.savingRates, value: `${savingRates} %` },
        { label: locale.maxIncome, value: `${maxIncome} ${locale.currency}` },
        { label: locale.maxExpense, value: `${maxExpense} ${locale.currency}` },
        {
          label: locale.monthlyIncome,
          value: `${monthlyIncome} ${locale.currency}`,
        },
        {
          label: locale.monthlyExpense,
          value: `${monthlyExpense} ${locale.currency}`,
        },
      ],
    },

    {
      id: 'movingAverage',
      title: locale.movingAverage,
      fields: [
        {
          label: locale.avgExpense7,
          value: `${formatCurrency(avgExpense7)} грн`,
        },
        {
          label: locale.avgExpense30,
          value: `${formatCurrency(avgExpense30)} грн`,
        },
        {
          label: locale.predictedTomorrow,
          value: `${formatCurrency(predictedTomorrow)} грн`,
        },
        {
          label: locale.predictedWeek,
          value: `${formatCurrency(predictedWeek)} грн`,
        },
        {
          label: locale.predictedMonth,
          value: `${formatCurrency(predictedMonth)} грн`,
        },
      ],
    },
  ]
}
