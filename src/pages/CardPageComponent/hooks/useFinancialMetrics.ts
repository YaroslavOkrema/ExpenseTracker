import { useMemo } from 'react'
import type { Data } from '@/types/types'
import {
    calculateExpense,
    calculateExpenseRatio,
    calculateIncome,
    calculateMaxExpense,
    calculateMaxIncome,
    calculateMonthlyTransactions,
    calculateSavingRates,
} from '@/pages/CardPageComponent/helpers'
import { getDailyExpenses } from '@/utils/daily-expenses'
import { movingAverage } from '@/utils/moving-average'

export const useFinancialMetrics = (transactions: Data[]) => {
    return useMemo(() => {
        const income = calculateIncome(transactions)
        const expenses = calculateExpense(transactions)
        const balance = income - expenses
        const expenseRatio = calculateExpenseRatio(income, expenses)
        const savingRates = calculateSavingRates(income, balance)

        const maxIncome = calculateMaxIncome(transactions)
        const maxExpense = calculateMaxExpense(transactions)

        const monthly = calculateMonthlyTransactions(transactions)
        const monthlyIncome = calculateIncome(monthly)
        const monthlyExpenses = calculateExpense(monthly)

        const daily = getDailyExpenses(transactions)
        const dailyValues = daily.map(d => d.expense)

        const ma7 = movingAverage(dailyValues, 7)
        const ma30 = movingAverage(dailyValues, 30)

        const avgExpense7 = ma7.length ? ma7[ma7.length - 1] : 0
        const avgExpense30 = ma30.length ? ma30[ma30.length - 1] : 0

        const predictedTomorrow = avgExpense7
        const predictedWeek = avgExpense7 * 7
        const predictedMonth = avgExpense30 * 30

        return {
            income,
            expenses,
            balance,
            expenseRatio,
            savingRates,
            maxIncome,
            maxExpense,
            monthlyIncome,
            monthlyExpenses,
            avgExpense7,
            avgExpense30,
            predictedTomorrow,
            predictedWeek,
            predictedMonth,
        }
    }, [transactions])
}
