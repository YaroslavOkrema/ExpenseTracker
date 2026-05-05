import { TransactionType } from '@/types/enums'
import type { Data } from '@/types/types'

export const mockTransactions: Data[] = [
  // --- ТРАВЕНЬ 2026 ---
  {
    id: 't1',
    description: 'Зарплата',
    sum: 27000,
    type: TransactionType.INCOME,
    date: '2026-05-01',
  },
  {
    id: 't2',
    description: 'Одяг',
    sum: 7500,
    type: TransactionType.EXPENSE,
    date: '2026-05-04',
  }, // Аномалія
  {
    id: 't3',
    description: 'Пальне',
    sum: 3000,
    type: TransactionType.EXPENSE,
    date: '2026-05-03',
  },
  {
    id: 't4',
    description: 'Продукти',
    sum: 1200,
    type: TransactionType.EXPENSE,
    date: '2026-05-02',
  },

  // --- КВІТЕНЬ 2026 ---
  {
    id: 't5',
    description: 'Техніка',
    sum: 32000,
    type: TransactionType.EXPENSE,
    date: '2026-04-20',
  }, // Аномалія
  {
    id: 't6',
    description: 'Продукти',
    sum: 1500,
    type: TransactionType.EXPENSE,
    date: '2026-04-15',
  },
  {
    id: 't7',
    description: 'Пальне',
    sum: 3000,
    type: TransactionType.EXPENSE,
    date: '2026-04-10',
  },
  {
    id: 't8',
    description: 'Комуналка',
    sum: 2500,
    type: TransactionType.EXPENSE,
    date: '2026-04-05',
  },
  {
    id: 't9',
    description: 'Зарплата',
    sum: 27000,
    type: TransactionType.INCOME,
    date: '2026-04-01',
  },

  // --- БЕРЕЗЕНЬ 2026 ---
  {
    id: 't10',
    description: 'Розваги',
    sum: 1000,
    type: TransactionType.EXPENSE,
    date: '2026-03-25',
  },
  {
    id: 't11',
    description: 'СТО',
    sum: 22000,
    type: TransactionType.EXPENSE,
    date: '2026-03-18',
  }, // Мега-аномалія!
  {
    id: 't12',
    description: 'Продукти',
    sum: 1400,
    type: TransactionType.EXPENSE,
    date: '2026-03-12',
  },
  {
    id: 't13',
    description: 'Пальне',
    sum: 3000,
    type: TransactionType.EXPENSE,
    date: '2026-03-05',
  },
  {
    id: 't14',
    description: 'Зарплата',
    sum: 27000,
    type: TransactionType.INCOME,
    date: '2026-03-01',
  },

  // --- ЛЮТИЙ 2026 ---
  {
    id: 't15',
    description: 'Продукти',
    sum: 1300,
    type: TransactionType.EXPENSE,
    date: '2026-02-20',
  },
  {
    id: 't16',
    description: 'Навчання',
    sum: 5500,
    type: TransactionType.EXPENSE,
    date: '2026-02-15',
  }, // Аномалія
  {
    id: 't17',
    description: 'Комуналка',
    sum: 2800,
    type: TransactionType.EXPENSE,
    date: '2026-02-10',
  },
  {
    id: 't18',
    description: 'Пальне',
    sum: 3000,
    type: TransactionType.EXPENSE,
    date: '2026-02-05',
  },
  {
    id: 't19',
    description: 'Зарплата',
    sum: 27000,
    type: TransactionType.INCOME,
    date: '2026-02-01',
  },

  // --- СІЧЕНЬ 2026 ---
  {
    id: 't20',
    description: 'Одяг',
    sum: 1500,
    type: TransactionType.EXPENSE,
    date: '2026-01-22',
  },
  {
    id: 't21',
    description: 'Продукти',
    sum: 1600,
    type: TransactionType.EXPENSE,
    date: '2026-01-18',
  },
  {
    id: 't22',
    description: 'Пальне',
    sum: 3000,
    type: TransactionType.EXPENSE,
    date: '2026-01-12',
  },
  {
    id: 't23',
    description: 'Подорож',
    sum: 6000,
    type: TransactionType.EXPENSE,
    date: '2026-01-05',
  }, // Аномалія
  {
    id: 't24',
    description: 'Зарплата',
    sum: 27000,
    type: TransactionType.INCOME,
    date: '2026-01-01',
  },

  // --- ГРУДЕНЬ 2025 ---
  {
    id: 't25',
    description: 'Продукти',
    sum: 2000,
    type: TransactionType.EXPENSE,
    date: '2025-12-28',
  },
  {
    id: 't26',
    description: 'Подарунки',
    sum: 9000,
    type: TransactionType.EXPENSE,
    date: '2025-12-25',
  }, // Аномалія
  {
    id: 't27',
    description: 'Комуналка',
    sum: 2200,
    type: TransactionType.EXPENSE,
    date: '2025-12-15',
  },
  {
    id: 't28',
    description: 'Пальне',
    sum: 3000,
    type: TransactionType.EXPENSE,
    date: '2025-12-10',
  },
  {
    id: 't29',
    description: 'Зарплата',
    sum: 27000,
    type: TransactionType.INCOME,
    date: '2025-12-01',
  },
]
