import { useMemo, useState } from 'react'
import type { Data } from '@/types/types.ts'
import { TransactionType } from '@/types/enums.ts'

export const useCardPageComponent = () => {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [transactions, setTransaction] = useState<Data[]>([])

  const toggleShowForm = (): void => {
    setShowForm(prev => !prev)
  }

  function calculateIncome(transactions: Data[]): number {
    return transactions
      .filter(transaction => transaction.type === TransactionType.INCOME)
      .reduce((sum, transaction) => sum + Number(transaction.sum), 0)
  }

  function calculateExpense(transactions: Data[]): number {
    return transactions
      .filter(transaction => transaction.type === TransactionType.EXPENSE)
      .reduce((sum, transaction) => sum + Number(transaction.sum), 0)
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
