import { type SubmitHandler, useForm } from 'react-hook-form'
import type { Data } from '@/types/types.ts'
import type { FormProps } from '@/components/FormComponent/types.ts'
import { DEFAULT_VALUES } from '@/constants/constants.ts'
import { saveTransactions } from '@/utils/localeStorage/localeStorage.ts'
import { useLocales } from '@/context/LocalesContext'
import { toast } from 'sonner'

export const useFormComponent = ({
  setShowForm,
  setTransaction,
}: FormProps) => {
  const { register, handleSubmit, control, reset } = useForm<Data>({
    defaultValues: DEFAULT_VALUES,
  })

  const { translations } = useLocales()

  const hamdleSubmit: SubmitHandler<Data> = data => {
    const newTransaction: Data = {
      ...data,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
    }

    setTransaction(prev => {
      const transaction = [newTransaction, ...prev]

      const sorted = [...transaction].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })

      saveTransactions(transaction)

      return sorted
    })
    reset()
    setShowForm(false)

    toast.success(translations.toasts.success)
  }

  return {
    hamdleSubmit,
    register,
    handleSubmit,
    control,
    locale: translations.tracker,
  }
}
