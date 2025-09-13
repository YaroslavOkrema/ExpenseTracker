import { type SubmitHandler, useForm } from 'react-hook-form'
import type { Data } from '@/types/types.ts'
import type { FormProps } from '@/components/FormComponent/types.ts'
import { DEFAULT_VALUES } from '@/constants/constants.ts'
import { saveTransactions } from '@/utils/localeStorage/localeStorage.ts'
import { useLocales } from '@/context/LocalesContext'

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
    }

    setTransaction(prev => {
      const transaction = [...prev, newTransaction]

      saveTransactions(transaction)

      return transaction
    })
    reset()
    setShowForm(false)
  }

  return {
    hamdleSubmit,
    register,
    handleSubmit,
    control,
    locale: translations.tracker,
  }
}
