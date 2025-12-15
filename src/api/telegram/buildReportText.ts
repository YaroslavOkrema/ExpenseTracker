import { formatDateTime } from '@/utils/format-date-time'
import { AnalyticsSection } from '@/api/telegram/types'

export const buildFullReportText = (sections: AnalyticsSection[]): string => {
  const header = [
    '📊 Фінансовий звіт',
    `📅 Дата: ${formatDateTime()}`,
    '',
    '━━━━━━━━━━━━━━━━━━━━',
    '',
  ].join('\n')

  const blocks = sections
    .map(section => {
      const body = section.fields.length
        ? section.fields
            .map(({ label, value }) => `• ${label}: ${value}`)
            .join('\n')
        : '• Немає даних'

      return [`📌 ${section.title}`, '', body, '', '━━━━━━━━━━━━━━━━━━━━'].join(
        '\n',
      )
    })
    .join('\n')

  return `${header}${blocks}`
}
