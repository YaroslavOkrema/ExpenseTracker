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
