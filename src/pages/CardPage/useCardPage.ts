import { useState } from 'react'
import type { Data } from '@/types/types.ts'

export const useCardPage = () => {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [transactions, setTransaction] = useState<Data[]>([])

  const toggleShowForm = (): void => {
    setShowForm(prev => !prev)
  }

  return { showForm, setShowForm, setTransaction, transactions, toggleShowForm }
}
