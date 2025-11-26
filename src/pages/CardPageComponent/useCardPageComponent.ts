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
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages],
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
    locale: translations.tracker,
  }
}
