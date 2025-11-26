import type { Data } from '@/types/types.ts'
import { TransactionType } from '@/types/enums.ts'

export function calculateIncome(transactions: Data[]): number {
  return transactions
    .filter(transaction => transaction.type === TransactionType.INCOME)
    .reduce((sum, transaction) => sum + Number(transaction.sum), 0)
}

export function calculateExpense(transactions: Data[]): number {
  return transactions
    .filter(transaction => transaction.type === TransactionType.EXPENSE)
    .reduce((sum, transaction) => sum + Number(transaction.sum), 0)
}

export function calculateExpenseRatio(income: number, expenses: number) {
  return income > 0 ? Math.ceil((expenses / income) * 100) : 0
}

export function calculateSavingRates(income: number, balance: number) {
  return income > 0 ? Math.ceil((balance / income) * 100) : 0
}

export function calculateMaxIncome(transactions: Data[]) {
  return Math.max(
    ...transactions
      .filter(transaction => transaction.type === TransactionType.INCOME)
      .map(transaction => transaction.sum),
    0,
  )
}

export function calculateMaxExpense(transactions: Data[]) {
  return Math.max(
    ...transactions
      .filter(transaction => transaction.type === TransactionType.EXPENSE)
      .map(transaction => transaction.sum),
    0,
  )
}

export function calculateMonthlyTransactions(
  transactions: Data[],
  year = new Date().getFullYear(),
  month = new Date().getMonth(),
) {
  return transactions.filter(t => {
    const date = new Date(t.date)
    return date.getFullYear() === year && date.getMonth() === month
  })
}
