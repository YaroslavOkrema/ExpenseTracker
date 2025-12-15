export type TelegramResponse = {
  ok: boolean
  description?: string
}

export type AnalyticsField = {
  label: string
  value: string | number
}

export type AnalyticsSection = {
  id: string
  title: string
  fields: AnalyticsField[]
}
