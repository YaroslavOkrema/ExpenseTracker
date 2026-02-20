import { useEffect, useState } from 'react'
import { toast } from 'sonner'

interface NBUData {
    r030: number
    txt: string
    rate: number
    cc: string
    exchangedate: string
}

export const useCurrencyRates = () => {
    const [rates, setRates] = useState<Record<string, number>>({})
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(
                    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
                )
                if (!response.ok) {
                    throw new Error('Failed to fetch rates')
                }
                const data: NBUData[] = await response.json()

                const ratesMap: Record<string, number> = {
                    UAH: 1, // Base currency
                }

                data.forEach(item => {
                    if (['USD', 'EUR'].includes(item.cc)) {
                        ratesMap[item.cc] = item.rate
                    }
                })

                setRates(ratesMap)
                setLoading(false)
            } catch (err) {
                console.error(err)
                setError('Failed to load exchange rates')
                setLoading(false)
                toast.error('Failed to load exchange rates')
            }
        }

        fetchRates()
    }, [])

    return { rates, loading, error }
}
