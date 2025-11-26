import { TRANSLATIONS } from '@/constants/constants.ts'
import { Language } from '@/types/enums.ts'

export type Data = {
  id: string
  description: string
  sum: number
  type: string
  date: string
}

export type Locale = (typeof TRANSLATIONS)[Language.EN]
