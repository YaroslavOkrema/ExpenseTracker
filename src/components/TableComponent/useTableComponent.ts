import { TransactionType } from '@/types/enums.ts'
import { useLocales } from '@/context/LocalesContext'

export function useTableComponent() {
  const { translations } = useLocales()

  function colorForSum(type: TransactionType | string): string {
    return type === TransactionType.EXPENSE ? 'text-red-500' : 'text-green-500'
  }

  return { colorForSum, locale: translations.tracker }
}
