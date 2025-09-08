import type { Data } from '@/types/types.ts'

export type TableComponentProps = {
  transactions: Data[]
  removeTransaction: (id: string) => void
}
