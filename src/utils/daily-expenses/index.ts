import type { Data } from '@/types/types'
import { TransactionType } from '@/types/enums'

export type DailyPoint = {
  date: string
  expense: number
}

export function getDailyExpenses(transactions: Data[]): DailyPoint[] {
  const map = new Map<string, number>()

  for (const t of transactions) {
    if (!t.date) continue
    if (t.type !== TransactionType.EXPENSE) continue

    const isoDate = new Date(t.date).toISOString().slice(0, 10)
    map.set(isoDate, (map.get(isoDate) ?? 0) + Number(t.sum))
  }

  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, expense]) => ({ date, expense }))
}
