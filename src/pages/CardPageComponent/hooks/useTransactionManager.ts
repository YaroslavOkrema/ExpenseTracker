import { useState } from 'react'
import type { Data } from '@/types/types'
import { mockTransactions } from '@/mock/mockTransactions'
import { saveTransactions } from '@/utils/localeStorage/localeStorage'
import { useLocales } from '@/context/LocalesContext'
import { toast } from 'sonner'

export const useTransactionManager = () => {
    const [transactions, setTransactions] = useState<Data[]>(mockTransactions)
    const { translations } = useLocales()

    const removeTransaction = (id: string | number) => {
        const next = transactions.filter(transaction => transaction.id !== id)
        setTransactions(next)
        saveTransactions(next)
        toast.success(translations.toasts.remove)
        return next
    }

    return {
        transactions,
        setTransactions,
        removeTransaction,
    }
}
