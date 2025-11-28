import { useLocales } from '@/context/LocalesContext'
import { analyticsData } from '@/components/AnalyticsComponent/helpers.ts'
import { AnalyticsComponentProps } from '@/components/AnalyticsComponent/types.ts'

export function useAnalyticsComponent(data: AnalyticsComponentProps) {
  const { translations } = useLocales()

  return {
    locale: translations.analytics,
    sections: analyticsData(data, translations.analytics),
  }
}
