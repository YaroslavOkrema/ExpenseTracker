import { AnalyticsComponentProps } from '@/components/AnalyticsComponent/types.ts'
import { useAnalyticsComponent } from '@/components/AnalyticsComponent/useAnalyticsComponent.ts'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs.tsx'
import { JSX } from 'react'

function AnalyticsComponent(data: AnalyticsComponentProps): JSX.Element {
  const { sections } = useAnalyticsComponent(data)

  return (
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
  )
}

export default AnalyticsComponent
