import { useMemo, useState } from 'react'
import type { Data } from '@/types/types.ts'

export const useCardPage = () => {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [transactions, setTransaction] = useState<Data[]>([])

  const toggleShowForm = (): void => {
    setShowForm(prev => !prev)
  }

  const { income, expenses, balance } = useMemo(() => {
    const income = transactions
      .filter(transaction => transaction.type === 'income')
      .reduce((sum, transaction) => sum + Number(transaction.sum), 0)

    const expenses = transactions
      .filter(transaction => transaction.type === 'expense')
      .reduce((sum, transaction) => sum + Number(transaction.sum), 0)

    return {
      income,
      expenses,
      balance: income - expenses,
    }
  }, [transactions])

  return {
    showForm,
    setShowForm,
    setTransaction,
    transactions,
    toggleShowForm,
    income,
    expenses,
    balance,
  }
}
