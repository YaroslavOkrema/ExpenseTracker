import { AnalyticsComponentProps } from '@/components/AnalyticsComponent/types.ts'
import { Locale } from '@/types/types.ts'

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
          value: `${avgExpense7} ${locale.currency}`,
        },
        {
          label: locale.avgExpense30,
          value: `${avgExpense30} ${locale.currency}`,
        },
        {
          label: locale.predictedTomorrow,
          value: `${predictedTomorrow} ${locale.currency}`,
        },
        {
          label: locale.predictedWeek,
          value: `${predictedWeek} ${locale.currency}`,
        },
        {
          label: locale.predictedMonth,
          value: `${predictedMonth} ${locale.currency}`,
        },
      ],
    },
  ]
}
