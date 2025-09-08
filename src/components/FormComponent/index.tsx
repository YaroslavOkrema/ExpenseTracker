import { Label } from '@/components/ui/label.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Controller } from 'react-hook-form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx'
import { Button } from '@/components/ui/button.tsx'
import type { FormProps } from '@/components/FormComponent/types.ts'
import { useFormComponent } from '@/components/FormComponent/useFormComponent.ts'
import type { JSX } from 'react'
import { TransactionType } from '@/types/enums.ts'

function FormComponent({
  setShowForm,
  setTransaction,
}: FormProps): JSX.Element {
  const { handleSubmit, hamdleSubmit, control, register } = useFormComponent({
    setShowForm,
    setTransaction,
  })

  return (
    <form onSubmit={handleSubmit(hamdleSubmit)} className="flex flex-col gap-2">
      <Label>Опис</Label>
      <Input
        title="text"
        {...register('description')}
        placeholder="Наприклад: Продукти"
      />

      <Label>Сума</Label>
      <Input title="number" {...register('sum')} placeholder="1000" />

      <Label>Тип</Label>
      <Controller
        name="type"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Дохід" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={TransactionType.INCOME}>Дохід</SelectItem>
              <SelectItem value={TransactionType.EXPENSE}>Витрата</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      <Button className="mt-2">Зберегти</Button>
    </form>
  )
}

export default FormComponent
