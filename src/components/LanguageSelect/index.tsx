import { Language } from '@/types/enums.ts'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx'
import { useLanguageSelect } from '@/components/LanguageSelect/useLanguageSelect.ts'

function LanguageSelect() {
  const { locale, handleChangeLocale, locales } = useLanguageSelect()
  return (
    <div className="flex justify-between mt-6">
      <span className="text-md font-medium w-[72%]">{locales.language}</span>
      <Select
        value={locale}
        onValueChange={(value: Language) => handleChangeLocale(value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="En" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={Language.EN}>EN</SelectItem>
          <SelectItem value={Language.UA}>UA</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default LanguageSelect
