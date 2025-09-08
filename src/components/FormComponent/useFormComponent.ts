import { type SubmitHandler, useForm } from 'react-hook-form'
import type { Data } from '@/types/types.ts'
import type { FormProps } from '@/components/FormComponent/types.ts'
import { DEFAULT_VALUES } from '@/constants/constants.ts'
import { saveTransactions } from '@/utils/localeStorage/localeStorage.ts'

export const useFormComponent = ({
  setShowForm,
  setTransaction,
}: FormProps) => {
  const { register, handleSubmit, control, reset } = useForm<Data>({
    defaultValues: DEFAULT_VALUES,
  })

  const hamdleSubmit: SubmitHandler<Data> = data => {
    setTransaction(prev => {
      const transaction = [...prev, data]

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
  }
}
