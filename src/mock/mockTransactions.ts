import { TransactionType } from '@/types/enums'
import type { Data } from '@/types/types'

export const mockTransactions: Data[] = [
  // ================================================================
  // ТРАВЕНЬ 2026  |  Дохід: 34 500  |  Витрати: ~23 420  |  +11 080
  // ================================================================
  { id: 't001', description: 'Зарплата',           sum: 28500, type: TransactionType.INCOME,  date: '2026-05-01' },
  { id: 't002', description: 'Продукти',            sum: 980,   type: TransactionType.EXPENSE, date: '2026-05-02' },
  { id: 't003', description: 'Кава/Ресторан',       sum: 320,   type: TransactionType.EXPENSE, date: '2026-05-03' },
  { id: 't004', description: 'Пальне',              sum: 1800,  type: TransactionType.EXPENSE, date: '2026-05-04' },
  { id: 't005', description: 'Продукти',            sum: 650,   type: TransactionType.EXPENSE, date: '2026-05-05' },
  { id: 't006', description: 'Аптека',              sum: 430,   type: TransactionType.EXPENSE, date: '2026-05-07' },
  { id: 't007', description: 'Продукти',            sum: 1100,  type: TransactionType.EXPENSE, date: '2026-05-09' },
  { id: 't008', description: 'Одяг (шопінг)',       sum: 8700,  type: TransactionType.EXPENSE, date: '2026-05-10' }, // ⚠ АНОМАЛІЯ
  { id: 't009', description: 'Кава/Ресторан',       sum: 280,   type: TransactionType.EXPENSE, date: '2026-05-11' },
  { id: 't010', description: 'Комуналка',           sum: 2600,  type: TransactionType.EXPENSE, date: '2026-05-12' },
  { id: 't011', description: 'Продукти',            sum: 870,   type: TransactionType.EXPENSE, date: '2026-05-13' },
  { id: 't012', description: 'Пальне',              sum: 1700,  type: TransactionType.EXPENSE, date: '2026-05-15' },
  { id: 't013', description: 'Розваги',             sum: 600,   type: TransactionType.EXPENSE, date: '2026-05-16' },
  { id: 't014', description: 'Продукти',            sum: 940,   type: TransactionType.EXPENSE, date: '2026-05-17' },
  { id: 't015', description: 'Фріланс',             sum: 6000,  type: TransactionType.INCOME,  date: '2026-05-18' },
  { id: 't016', description: 'Кава/Ресторан',       sum: 350,   type: TransactionType.EXPENSE, date: '2026-05-19' },
  { id: 't017', description: 'Продукти',            sum: 720,   type: TransactionType.EXPENSE, date: '2026-05-20' },
  { id: 't018', description: 'Пальне',              sum: 1900,  type: TransactionType.EXPENSE, date: '2026-05-21' },
  { id: 't019', description: 'Передплати',          sum: 480,   type: TransactionType.EXPENSE, date: '2026-05-22' },

  // ================================================================
  // КВІТЕНЬ 2026  |  Дохід: 53 500  |  Витрати: ~49 900  |  +3 600
  // ================================================================
  { id: 't020', description: 'Зарплата',            sum: 28500, type: TransactionType.INCOME,  date: '2026-04-01' },
  { id: 't021', description: 'Продукти',            sum: 1050,  type: TransactionType.EXPENSE, date: '2026-04-02' },
  { id: 't022', description: 'Пальне',              sum: 1750,  type: TransactionType.EXPENSE, date: '2026-04-03' },
  { id: 't023', description: 'Кава/Ресторан',       sum: 310,   type: TransactionType.EXPENSE, date: '2026-04-04' },
  { id: 't024', description: 'Комуналка',           sum: 2400,  type: TransactionType.EXPENSE, date: '2026-04-05' },
  { id: 't025', description: 'Продукти',            sum: 890,   type: TransactionType.EXPENSE, date: '2026-04-07' },
  { id: 't026', description: 'Аптека',              sum: 380,   type: TransactionType.EXPENSE, date: '2026-04-09' },
  { id: 't027', description: 'Продукти',            sum: 760,   type: TransactionType.EXPENSE, date: '2026-04-11' },
  { id: 't028', description: 'Квартальна премія',   sum: 15000, type: TransactionType.INCOME,  date: '2026-04-12' },
  { id: 't029', description: 'Пальне',              sum: 1800,  type: TransactionType.EXPENSE, date: '2026-04-14' },
  { id: 't030', description: 'Продукти',            sum: 1100,  type: TransactionType.EXPENSE, date: '2026-04-15' },
  { id: 't031', description: 'Нова техніка',        sum: 34000, type: TransactionType.EXPENSE, date: '2026-04-17' }, // ⚠ МЕГА-АНОМАЛІЯ
  { id: 't032', description: 'Кава/Ресторан',       sum: 290,   type: TransactionType.EXPENSE, date: '2026-04-19' },
  { id: 't033', description: 'Продукти',            sum: 830,   type: TransactionType.EXPENSE, date: '2026-04-21' },
  { id: 't034', description: 'Пальне',              sum: 1650,  type: TransactionType.EXPENSE, date: '2026-04-23' },
  { id: 't035', description: 'Фріланс',             sum: 10000, type: TransactionType.INCOME,  date: '2026-04-24' },
  { id: 't036', description: 'Передплати',          sum: 480,   type: TransactionType.EXPENSE, date: '2026-04-25' },
  { id: 't037', description: 'Продукти',            sum: 970,   type: TransactionType.EXPENSE, date: '2026-04-27' },
  { id: 't038', description: 'Кава/Ресторан',       sum: 340,   type: TransactionType.EXPENSE, date: '2026-04-29' },

  // ================================================================
  // БЕРЕЗЕНЬ 2026  |  Дохід: 45 000  |  Витрати: ~40 650  |  +4 350
  // ================================================================
  { id: 't039', description: 'Зарплата',            sum: 27000, type: TransactionType.INCOME,  date: '2026-03-01' },
  { id: 't040', description: 'Продукти',            sum: 990,   type: TransactionType.EXPENSE, date: '2026-03-02' },
  { id: 't041', description: 'Комуналка',           sum: 3100,  type: TransactionType.EXPENSE, date: '2026-03-03' },
  { id: 't042', description: 'Пальне',              sum: 1900,  type: TransactionType.EXPENSE, date: '2026-03-05' },
  { id: 't043', description: 'Продукти',            sum: 840,   type: TransactionType.EXPENSE, date: '2026-03-07' },
  { id: 't044', description: 'Кава/Ресторан',       sum: 410,   type: TransactionType.EXPENSE, date: '2026-03-09' },
  { id: 't045', description: 'Аптека',              sum: 620,   type: TransactionType.EXPENSE, date: '2026-03-10' },
  { id: 't046', description: 'Продукти',            sum: 1200,  type: TransactionType.EXPENSE, date: '2026-03-12' },
  { id: 't047', description: 'Фріланс',             sum: 18000, type: TransactionType.INCOME,  date: '2026-03-14' },
  { id: 't048', description: 'Ремонт авто (СТО)',   sum: 23500, type: TransactionType.EXPENSE, date: '2026-03-15' }, // ⚠ МЕГА-АНОМАЛІЯ
  { id: 't049', description: 'Пальне',              sum: 1850,  type: TransactionType.EXPENSE, date: '2026-03-17' },
  { id: 't050', description: 'Продукти',            sum: 780,   type: TransactionType.EXPENSE, date: '2026-03-19' },
  { id: 't051', description: 'Кава/Ресторан',       sum: 360,   type: TransactionType.EXPENSE, date: '2026-03-21' },
  { id: 't052', description: 'Продукти',            sum: 950,   type: TransactionType.EXPENSE, date: '2026-03-23' },
  { id: 't053', description: 'Передплати',          sum: 480,   type: TransactionType.EXPENSE, date: '2026-03-25' },
  { id: 't054', description: 'Пальне',              sum: 1700,  type: TransactionType.EXPENSE, date: '2026-03-27' },
  { id: 't055', description: 'Продукти',            sum: 870,   type: TransactionType.EXPENSE, date: '2026-03-29' },

  // ================================================================
  // ЛЮТИЙ 2026  |  Дохід: 27 000  |  Витрати: ~21 660  |  +5 340
  // ================================================================
  { id: 't056', description: 'Зарплата',            sum: 27000, type: TransactionType.INCOME,  date: '2026-02-01' },
  { id: 't057', description: 'Комуналка',           sum: 3400,  type: TransactionType.EXPENSE, date: '2026-02-02' },
  { id: 't058', description: 'Продукти',            sum: 1050,  type: TransactionType.EXPENSE, date: '2026-02-03' },
  { id: 't059', description: 'Пальне',              sum: 2000,  type: TransactionType.EXPENSE, date: '2026-02-05' },
  { id: 't060', description: 'Кава/Ресторан',       sum: 290,   type: TransactionType.EXPENSE, date: '2026-02-07' },
  { id: 't061', description: 'Продукти',            sum: 930,   type: TransactionType.EXPENSE, date: '2026-02-09' },
  { id: 't062', description: 'Навчання (курс)',      sum: 5800,  type: TransactionType.EXPENSE, date: '2026-02-10' }, // ⚠ АНОМАЛІЯ
  { id: 't063', description: 'Аптека',              sum: 550,   type: TransactionType.EXPENSE, date: '2026-02-12' },
  { id: 't064', description: 'Продукти',            sum: 880,   type: TransactionType.EXPENSE, date: '2026-02-14' },
  { id: 't065', description: 'Розваги (кіно)',      sum: 480,   type: TransactionType.EXPENSE, date: '2026-02-15' },
  { id: 't066', description: 'Пальне',              sum: 1900,  type: TransactionType.EXPENSE, date: '2026-02-17' },
  { id: 't067', description: 'Продукти',            sum: 1020,  type: TransactionType.EXPENSE, date: '2026-02-19' },
  { id: 't068', description: 'Кава/Ресторан',       sum: 370,   type: TransactionType.EXPENSE, date: '2026-02-21' },
  { id: 't069', description: 'Передплати',          sum: 480,   type: TransactionType.EXPENSE, date: '2026-02-23' },
  { id: 't070', description: 'Продукти',            sum: 760,   type: TransactionType.EXPENSE, date: '2026-02-25' },
  { id: 't071', description: 'Пальне',              sum: 1750,  type: TransactionType.EXPENSE, date: '2026-02-27' },

  // ================================================================
  // СІЧЕНЬ 2026  |  Дохід: 36 000  |  Витрати: ~32 520  |  +3 480
  // ================================================================
  { id: 't072', description: 'Зарплата',            sum: 27000, type: TransactionType.INCOME,  date: '2026-01-01' },
  { id: 't073', description: 'Подорож (Карпати)',   sum: 12000, type: TransactionType.EXPENSE, date: '2026-01-02' }, // ⚠ АНОМАЛІЯ
  { id: 't074', description: 'Продукти',            sum: 1100,  type: TransactionType.EXPENSE, date: '2026-01-05' },
  { id: 't075', description: 'Комуналка',           sum: 3600,  type: TransactionType.EXPENSE, date: '2026-01-06' },
  { id: 't076', description: 'Пальне',              sum: 2100,  type: TransactionType.EXPENSE, date: '2026-01-08' },
  { id: 't077', description: 'Продукти',            sum: 950,   type: TransactionType.EXPENSE, date: '2026-01-10' },
  { id: 't078', description: 'Кава/Ресторан',       sum: 420,   type: TransactionType.EXPENSE, date: '2026-01-12' },
  { id: 't079', description: 'Аптека',              sum: 390,   type: TransactionType.EXPENSE, date: '2026-01-14' },
  { id: 't080', description: 'Одяг (зимовий)',      sum: 4200,  type: TransactionType.EXPENSE, date: '2026-01-15' }, // ⚠ АНОМАЛІЯ
  { id: 't081', description: 'Фріланс',             sum: 9000,  type: TransactionType.INCOME,  date: '2026-01-16' },
  { id: 't082', description: 'Продукти',            sum: 1200,  type: TransactionType.EXPENSE, date: '2026-01-17' },
  { id: 't083', description: 'Пальне',              sum: 2000,  type: TransactionType.EXPENSE, date: '2026-01-19' },
  { id: 't084', description: 'Розваги',             sum: 700,   type: TransactionType.EXPENSE, date: '2026-01-21' },
  { id: 't085', description: 'Передплати',          sum: 480,   type: TransactionType.EXPENSE, date: '2026-01-23' },
  { id: 't086', description: 'Продукти',            sum: 1050,  type: TransactionType.EXPENSE, date: '2026-01-25' },
  { id: 't087', description: 'Кава/Ресторан',       sum: 380,   type: TransactionType.EXPENSE, date: '2026-01-27' },
  { id: 't088', description: 'Пальне',              sum: 1950,  type: TransactionType.EXPENSE, date: '2026-01-29' },

  // ================================================================
  // ГРУДЕНЬ 2025  |  Дохід: 27 000  |  Витрати: ~26 960  |  +40
  // ================================================================
  { id: 't089', description: 'Зарплата',            sum: 27000, type: TransactionType.INCOME,  date: '2025-12-01' },
  { id: 't090', description: 'Комуналка',           sum: 3200,  type: TransactionType.EXPENSE, date: '2025-12-02' },
  { id: 't091', description: 'Продукти',            sum: 1100,  type: TransactionType.EXPENSE, date: '2025-12-04' },
  { id: 't092', description: 'Пальне',              sum: 2000,  type: TransactionType.EXPENSE, date: '2025-12-06' },
  { id: 't093', description: 'Кава/Ресторан',       sum: 450,   type: TransactionType.EXPENSE, date: '2025-12-08' },
  { id: 't094', description: 'Продукти',            sum: 980,   type: TransactionType.EXPENSE, date: '2025-12-10' },
  { id: 't095', description: 'Аптека',              sum: 320,   type: TransactionType.EXPENSE, date: '2025-12-11' },
  { id: 't096', description: 'Розваги',             sum: 850,   type: TransactionType.EXPENSE, date: '2025-12-13' },
  { id: 't097', description: 'Подарунки (НГ)',      sum: 11500, type: TransactionType.EXPENSE, date: '2025-12-20' }, // ⚠ МЕГА-АНОМАЛІЯ
  { id: 't098', description: 'Продукти',            sum: 2100,  type: TransactionType.EXPENSE, date: '2025-12-22' },
  { id: 't099', description: 'Пальне',              sum: 1900,  type: TransactionType.EXPENSE, date: '2025-12-24' },
  { id: 't100', description: 'Кава/Ресторан',       sum: 680,   type: TransactionType.EXPENSE, date: '2025-12-26' },
  { id: 't101', description: 'Передплати',          sum: 480,   type: TransactionType.EXPENSE, date: '2025-12-28' },
  { id: 't102', description: 'Продукти',            sum: 1400,  type: TransactionType.EXPENSE, date: '2025-12-30' },
]
