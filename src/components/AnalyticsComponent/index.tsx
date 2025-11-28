import { AnalyticsComponentProps } from '@/components/AnalyticsComponent/types.ts'
import { useAnalyticsComponent } from '@/components/AnalyticsComponent/useAnalyticsComponent.ts'

function AnalyticsComponent(data: AnalyticsComponentProps) {
  const { sections } = useAnalyticsComponent(data)

  return (
    <div className="space-y-8">
      {sections.map(({ title, fields }) => (
        <div key={title} className="space-y-3">
          <h2 className="text-lg font-semibold">{title}</h2>

          {fields.map(({ label, value }) => (
            <div key={label} className="flex justify-between mt-1 text-sm">
              <span>{label}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default AnalyticsComponent
