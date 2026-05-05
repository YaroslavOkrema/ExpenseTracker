import { useState, useEffect, useMemo } from 'react'
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
import { getMovingAverage, MASettingsMode } from '@/utils/moving-average'

export const useFinancialMetrics = (transactions: Data[]) => {
    const [mode, setMode] = useState<MASettingsMode>(() => {
        return (localStorage.getItem('ma_settings_mode') as MASettingsMode) || 'AUTO'
    })

    useEffect(() => {
        const handleSettingsChange = () => {
            setMode((localStorage.getItem('ma_settings_mode') as MASettingsMode) || 'AUTO')
        }
        window.addEventListener('ma_settings_changed', handleSettingsChange)
        return () => window.removeEventListener('ma_settings_changed', handleSettingsChange)
    }, [])

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

        const daily7 = getDailyExpenses(transactions, 7)
        const dailyValues7 = daily7.map(d => d.expense)

        const daily30 = getDailyExpenses(transactions, 30)
        const dailyValues30 = daily30.map(d => d.expense)

        const ma7 = getMovingAverage(dailyValues7, 7, mode)
        const ma30 = getMovingAverage(dailyValues30, 30, mode)

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
    }, [transactions, mode])
}
