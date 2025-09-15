import { LOCALE } from '@/constants/constants.ts'

export function formatNumbers(number: number): string {
  return number.toLocaleString(LOCALE)
}
