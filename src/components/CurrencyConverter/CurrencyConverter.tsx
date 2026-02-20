import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { useLocales } from '@/context/LocalesContext'
import { RefreshCw, Loader2 } from 'lucide-react'
import { useCurrencyRates } from '@/components/CurrencyConverter/useCurrencyRates'

const CURRENCIES = ['UAH', 'USD', 'EUR']

const CurrencyConverter = () => {
  const { translations } = useLocales()
  const t = translations.converter
  const { rates, loading } = useCurrencyRates()

  const [amount, setAmount] = useState<string>('')
  const [fromCurrency, setFromCurrency] = useState<string>('USD')
  const [toCurrency, setToCurrency] = useState<string>('UAH')
  const [result, setResult] = useState<number | null>(null)

  const handleConvert = () => {
    const value = parseFloat(amount)
    if (isNaN(value) || !rates[fromCurrency] || !rates[toCurrency]) return

    const fromRate = rates[fromCurrency]
    const toRate = rates[toCurrency]

    // Convert from 'fromCurrency' to UAH then to 'toCurrency'
    const converted = (value * fromRate) / toRate
    setResult(converted)
  }

  const resultDisplay = useMemo(() => {
    if (result === null) return null
    return new Intl.NumberFormat('uk-UA', {
      style: 'currency',
      currency: toCurrency,
    }).format(result)
  }, [result, toCurrency])

  if (loading) {
    return (
      <Card className="h-full border-none shadow-none flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </Card>
    )
  }

  return (
    <Card className="h-full border-none shadow-none">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <RefreshCw className="w-5 h-5" />
          {translations.tracker.converterTab}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>{t.amount}</Label>
          <Input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="0.00"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>{t.from}</Label>
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CURRENCIES.map(curr => (
                  <SelectItem key={curr} value={curr}>
                    {curr}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>{t.to}</Label>
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CURRENCIES.map(curr => (
                  <SelectItem key={curr} value={curr}>
                    {curr}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="w-full" onClick={handleConvert}>
          {t.convertButton}
        </Button>

        {resultDisplay && (
          <div className="mt-6 p-4 bg-secondary/20 rounded-lg text-center">
            <Label className="text-muted-foreground block mb-1">
              {t.result}
            </Label>
            <div className="text-2xl font-bold text-primary">
              {resultDisplay}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default CurrencyConverter
