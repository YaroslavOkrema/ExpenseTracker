import { AnalyticsComponentProps } from '@/components/AnalyticsComponent/types.ts'
import { useAnalyticsComponent } from '@/components/AnalyticsComponent/useAnalyticsComponent.ts'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs.tsx'
import { JSX } from 'react'
import { Button } from '@/components/ui/button.tsx'
import { buildFullReportText } from '@/api/telegram/buildReportText.ts'
import { sendTelegramMessage } from '@/api/telegram/telegram.ts'

function AnalyticsComponent(data: AnalyticsComponentProps): JSX.Element {
  const { sections } = useAnalyticsComponent(data)

  const handleSubmit = async (): Promise<void> => {
    const text = buildFullReportText(sections)
    await sendTelegramMessage(text)
  }

  return (
    <div>
      <Tabs defaultValue={sections[0].id}>
        <TabsList className="grid w-full grid-cols-2">
          {sections.map(({ id, title }) => (
            <TabsTrigger className="cursor-pointer" key={id} value={id}>
              {title}
            </TabsTrigger>
          ))}
        </TabsList>

        {sections.map(({ id, fields }) => (
          <TabsContent key={id} value={id}>
            <div className="space-y-3 mt-4">
              {fields.map(({ label, value }) => (
                <div key={label} className="flex justify-between mt-1 text-sm">
                  <span>{label}:</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <div className="mt-16">
        <Button onClick={handleSubmit} className="w-full cursor-pointer">
          Надіслати звіт в телеграм
        </Button>
      </div>
    </div>
  )
}

export default AnalyticsComponent
