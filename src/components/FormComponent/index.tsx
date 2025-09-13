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
  const { handleSubmit, hamdleSubmit, control, register, locale } =
    useFormComponent({
      setShowForm,
      setTransaction,
    })

  return (
    <form onSubmit={handleSubmit(hamdleSubmit)} className="flex flex-col gap-2">
      <Label>{locale.description}</Label>
      <Input
        title="text"
        {...register('description')}
        placeholder={locale.descriptionPlaceholder}
      />

      <Label>{locale.sum}</Label>
      <Input title="number" {...register('sum')} placeholder="1000" />

      <Label>{locale.type}</Label>
      <Controller
        name="type"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={locale.expense} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={TransactionType.INCOME}>
                {locale.income}
              </SelectItem>
              <SelectItem value={TransactionType.EXPENSE}>
                {locale.expense}
              </SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      <Button className="mt-2">{locale.buttonSave}</Button>
    </form>
  )
}

export default FormComponent
