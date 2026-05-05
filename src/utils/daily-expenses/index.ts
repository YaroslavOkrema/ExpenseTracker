import type { Data } from '@/types/types'
import { TransactionType } from '@/types/enums'

export type DailyPoint = {
  date: string
  expense: number
}

export function getDailyExpenses(transactions: Data[], periodDays?: number): DailyPoint[] {
  if (transactions.length === 0) {
    // Fallback to today if no transactions and a period is requested
    if (periodDays) {
      const result: DailyPoint[] = []
      const todayStr = new Date().toISOString().slice(0, 10)
      const d = new Date()
      d.setDate(d.getDate() - periodDays + 1)
      const startStr = d.toISOString().slice(0, 10)
      
      const currentDate = new Date(startStr)
      const endDate = new Date(todayStr)
      while (currentDate <= endDate) {
        result.push({ date: currentDate.toISOString().slice(0, 10), expense: 0 })
        currentDate.setUTCDate(currentDate.getUTCDate() + 1)
      }
      return result
    }
    return []
  }

  const map = new Map<string, number>()
  let minDate = new Date().toISOString().slice(0, 10)
  
  for (const t of transactions) {
    if (!t.date || t.type !== TransactionType.EXPENSE) continue
    const isoDate = new Date(t.date).toISOString().slice(0, 10)
    map.set(isoDate, (map.get(isoDate) ?? 0) + Number(t.sum))
    if (isoDate < minDate) {
      minDate = isoDate
    }
  }

  const todayStr = new Date().toISOString().slice(0, 10)
  
  let startStr = minDate
  if (periodDays) {
    const d = new Date()
    d.setDate(d.getDate() - periodDays + 1)
    startStr = d.toISOString().slice(0, 10)
  }

  const result: DailyPoint[] = []
  const currentDate = new Date(startStr)
  const endDate = new Date(todayStr)
  
  while (currentDate <= endDate) {
    const isoDate = currentDate.toISOString().slice(0, 10)
    result.push({ date: isoDate, expense: map.get(isoDate) ?? 0 })
    currentDate.setUTCDate(currentDate.getUTCDate() + 1)
  }

  return result
}
