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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useMASettings } from '@/hooks/useMASettings.ts'

function AnalyticsComponent(data: AnalyticsComponentProps): JSX.Element {
  const { sections } = useAnalyticsComponent(data)
  const { mode, setMode } = useMASettings()

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
            {id === 'movingAverage' && (
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm font-medium">Метод згладжування:</span>
                <Select
                  value={mode}
                  onValueChange={(val: never) => setMode(val)}
                >
                  <SelectTrigger className="w-[120px] h-8 text-xs">
                    <SelectValue placeholder="Mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SMA" className="text-xs">
                      SMA
                    </SelectItem>
                    <SelectItem value="EMA" className="text-xs">
                      EMA
                    </SelectItem>
                    <SelectItem value="WMA" className="text-xs">
                      WMA
                    </SelectItem>
                    <SelectItem value="AUTO" className="text-xs">
                      Auto
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            <div
              className={`space-y-3 ${id === 'movingAverage' ? 'mt-2' : 'mt-4'}`}
            >
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
      <div className="mt-8">
        <Button onClick={handleSubmit} className="w-full cursor-pointer">
          Надіслати звіт в телеграм
        </Button>
      </div>
    </div>
  )
}

export default AnalyticsComponent
