import { useMemo, useState } from 'react'
import type { Data } from '@/types/types.ts'
import {
  calculateExpense,
  calculateExpenseRatio,
  calculateIncome,
  calculateMaxExpense,
  calculateMaxIncome,
  calculateMonthlyTransactions,
  calculateSavingRates,
} from '@/pages/CardPageComponent/helpers.ts'
import {
  getTransactions,
  saveTransactions,
} from '@/utils/localeStorage/localeStorage.ts'
import * as React from 'react'
import {
  DEFAULT_PAGE,
  ITEMS_PER_PAGE,
} from '@/pages/CardPageComponent/constants.ts'
import { useLocales } from '@/context/LocalesContext'
import { toast } from 'sonner'
import { getDailyExpenses } from '@/utils/daily-expenses'
import { movingAverage } from '@/utils/moving-average'
import { getVisiblePageNumbers } from '@/components/PaginationComponent/helpers.ts'

export const useCardPageComponent = () => {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [transactions, setTransaction] = useState<Data[]>(getTransactions())
  const [page, setPage] = useState<number>(DEFAULT_PAGE)

  const { translations } = useLocales()

  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE)

  const startIndex = (page - DEFAULT_PAGE) * ITEMS_PER_PAGE

  const paginatedTransactions = transactions.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  )

  const toggleShowForm = (): void => {
    setShowForm(prev => !prev)
  }

  const {
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
  } = useMemo(() => {
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

  const removeTransactions = (id: string | number): void => {
    const next = transactions.filter(transaction => transaction.id !== id)
    setTransaction(next)
    saveTransactions(next)

    const nextTotal = Math.max(
      DEFAULT_PAGE,
      Math.ceil(next.length / ITEMS_PER_PAGE),
    )
    if (page > nextTotal) setPage(nextTotal)

    toast.success(translations.toasts.remove)
  }

  const handlePageChange = (newPage: number): void => {
    if (newPage >= DEFAULT_PAGE && newPage <= totalPages) {
      setPage(newPage)
    }
  }

  const handlePrevClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    event.preventDefault()
    handlePageChange(page - DEFAULT_PAGE)
  }

  const handleNextClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    event.preventDefault()
    handlePageChange(page + DEFAULT_PAGE)
  }

  const handleNumberClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    number: number,
  ): void => {
    event.preventDefault()
    handlePageChange(number)
  }

  const pageNumbers = useMemo(
    () => getVisiblePageNumbers(page, totalPages),
    [page, totalPages],
  )

  return {
    showForm,
    setShowForm,
    setTransaction,
    transactions,
    toggleShowForm,
    income,
    expenses,
    balance,
    removeTransactions,
    paginatedTransactions,
    handlePageChange,
    page,
    totalPages,
    pageNumbers,
    handlePrevClick,
    handleNextClick,
    handleNumberClick,
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
    locale: translations.tracker,
  }
}
