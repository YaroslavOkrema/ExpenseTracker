import { useMemo, useState } from 'react'
import type { Data } from '@/types/types.ts'
import {
  calculateExpense,
  calculateIncome,
} from '@/pages/CardPageComponent/helpers.ts'
import { getTransactions } from '@/utils/localeStorage/localeStorage.ts'

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
