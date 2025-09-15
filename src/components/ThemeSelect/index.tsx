import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Moon, Sun } from 'lucide-react'
import { useSelectTheme } from '@/components/ThemeSelect/useSelectTheme.ts'
import { JSX } from 'react'

function ThemeSelect(): JSX.Element {
  const { handleLight, handleSystem, handleDark, locale } = useSelectTheme()
  return (
    <DropdownMenu>
      <div className="flex justify-between">
        <span className="text-md font-medium w-[72%]">{locale.mode}</span>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          </Button>
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleLight}>
          {locale.light}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDark}>{locale.dark}</DropdownMenuItem>
        <DropdownMenuItem onClick={handleSystem}>
          {locale.system}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeSelect
