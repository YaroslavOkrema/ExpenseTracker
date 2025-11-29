import { Language } from '@/types/enums.ts'

import UAJSON from '@/locales/ua.json'
import ENJSON from '@/locales/en.json'

export const DEFAULT_VALUES = {
  description: '',
  sum: 0,
  type: '',
}

export const LOCALE = 'uk-UA'

export const TRANSLATIONS = {
  [Language.UA]: UAJSON,
  [Language.EN]: ENJSON,
}

export const DEFAULT_ICON_SIZE = 18

export enum TABS {
  expense = 'expense',
  analytics = 'analytics',
  diagrams = 'diagrams',
  settings = 'settings',
}
