import type { Dispatch, SetStateAction } from 'react'
import type { Data } from '@/types/types.ts'

export type FormProps = {
  setShowForm: Dispatch<SetStateAction<boolean>>
  setTransaction: Dispatch<SetStateAction<Data[]>>
}
