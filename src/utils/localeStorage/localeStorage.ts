import { Data } from '@/types/types.ts'

export const saveTransactions = (transactions: Data[]): void => {
  const transactionsString = JSON.stringify(transactions)
  localStorage.setItem('transactions', transactionsString)
}

export const getTransactions = (): Data[] => {
  const transactionsListString = localStorage.getItem('transactions')

  if (transactionsListString) {
    return JSON.parse(transactionsListString)
  } else {
    return []
  }
}
