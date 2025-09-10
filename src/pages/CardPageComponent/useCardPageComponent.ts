import { useEffect, useMemo, useState } from 'react'
import type { Data } from '@/types/types.ts'
import {
  calculateExpense,
  calculateIncome,
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

export const useCardPageComponent = () => {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [transactions, setTransaction] = useState<Data[]>(getTransactions())
  const [page, setPage] = useState<number>(DEFAULT_PAGE)

  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE)

  const startIndex = (page - DEFAULT_PAGE) * ITEMS_PER_PAGE

  const paginatedTransactions = transactions.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  )

  const toggleShowForm = (): void => {
    setShowForm(prev => !prev)
  }

  const { income, expenses, balance } = useMemo(() => {
    const income = calculateIncome(transactions)

    const expenses = calculateExpense(transactions)

    return {
      income,
      expenses,
      balance: income - expenses,
    }
  }, [transactions])

  const removeTransactions = (id: string | number): void => {
    const removeTransaction = transactions.filter(
      transaction => transaction.id !== id,
    )
    setTransaction(removeTransaction)
    saveTransactions(removeTransaction)
  }

  const handlePageChange = (newPage: number): void => {
    if (newPage >= DEFAULT_PAGE && newPage <= totalPages) {
      setPage(newPage)
    }
  }

  const handlePrevClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ): void => {
    event.preventDefault()
    handlePageChange(page - DEFAULT_PAGE)
  }

  const handleNextClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
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

  useEffect(() => {
    if (page > totalPages) {
      setPage(DEFAULT_PAGE)
    }
  }, [page, totalPages])

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
  }
}
