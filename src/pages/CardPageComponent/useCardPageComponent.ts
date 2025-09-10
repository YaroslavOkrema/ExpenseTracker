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

export const useCardPageComponent = () => {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [transactions, setTransaction] = useState<Data[]>(getTransactions())

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

  const itemsPerPage = 4
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(transactions.length / itemsPerPage)

  const startIndex = (page - 1) * itemsPerPage
  const paginatedTransactions = transactions.slice(
    startIndex,
    startIndex + itemsPerPage,
  )

  const handlePageChange = (newPage: number): void => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage)
    }
  }

  const pageNumbers = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages],
  )

  useEffect(() => {
    if (page > totalPages) {
      setPage(1)
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
  }
}
