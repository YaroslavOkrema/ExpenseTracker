import { TransactionType } from '@/types/enums.ts'

export function useTableComponent() {
  function colorForSum(type: TransactionType | string): string {
    return type === TransactionType.EXPENSE ? 'text-red-500' : 'text-green-500'
  }

  return { colorForSum }
}
