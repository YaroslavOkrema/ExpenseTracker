import { type SubmitHandler, useForm } from 'react-hook-form'
import type { Data } from '@/types/types.ts'
import type { FormProps } from '@/components/FormComponent/types.ts'
import { DEFAULT_VALUES } from '@/constants/constants.ts'

export const useFormComponent = ({
  setShowForm,
  setTransaction,
}: FormProps) => {
  const { register, handleSubmit, control, reset } = useForm<Data>({
    defaultValues: DEFAULT_VALUES,
  })

  const hamdleSubmit: SubmitHandler<Data> = data => {
    setTransaction(prev => [...prev, data])
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
