import { useState } from 'react'
import {
  DEFAULT_PAGE,
  ITEMS_PER_PAGE,
} from '@/pages/CardPageComponent/constants'
import { useLocales } from '@/context/LocalesContext'
import { useFinancialMetrics } from '@/pages/CardPageComponent/hooks/useFinancialMetrics'
import { useTransactionManager } from '@/pages/CardPageComponent/hooks/useTransactionManager'
import { usePagination } from '@/pages/CardPageComponent/hooks/usePagination'

export const useCardPageComponent = () => {
  const [showForm, setShowForm] = useState<boolean>(false)

  const { translations } = useLocales()

  const {
    transactions,
    setTransactions: setTransaction,
    removeTransaction: baseRemoveTransaction,
  } = useTransactionManager()

  const {
    page,
    setPage,
    totalPages,
    startIndex,
    handlePageChange,
    handlePrevClick,
    handleNextClick,
    handleNumberClick,
    pageNumbers,
  } = usePagination(transactions.length)

  const paginatedTransactions = transactions.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  )

  const toggleShowForm = (): void => {
    setShowForm(prev => !prev)
  }

  const financialMetrics = useFinancialMetrics(transactions)

  const removeTransactions = (id: string | number): void => {
    const next = baseRemoveTransaction(id)

    const nextTotal = Math.max(
      DEFAULT_PAGE,
      Math.ceil(next.length / ITEMS_PER_PAGE),
    )
    if (page > nextTotal) setPage(nextTotal)
  }

  return {
    showForm,
    setShowForm,
    setTransaction,
    transactions,
    toggleShowForm,
    removeTransactions,
    paginatedTransactions,
    handlePageChange,
    page,
    totalPages,
    pageNumbers,
    handlePrevClick,
    handleNextClick,
    handleNumberClick,
    locale: translations.tracker,
    ...financialMetrics,
  }
}
