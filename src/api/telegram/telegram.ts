import {
  TELEGRAM_BOT_TOKEN,
  TELEGRAM_CHAT_ID,
} from '@/api/telegram/constanst.ts'
import { TelegramResponse } from '@/api/telegram/types.ts'

export const sendTelegramMessage = async (text: string): Promise<void> => {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    throw new Error('Telegram env variables are missing')
  }

  const url =
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage` +
    `?chat_id=${encodeURIComponent(TELEGRAM_CHAT_ID)}` +
    `&text=${encodeURIComponent(text)}`

  const response = await fetch(url)
  const data = (await response.json()) as TelegramResponse

  if (!data.ok) {
    throw new Error(data.description || 'Telegram sendMessage failed')
  }
}
