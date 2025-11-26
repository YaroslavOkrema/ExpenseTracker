import { AnalyticsComponentProps } from '@/components/AnalyticsComponent/types.ts'
import { useAnalyticsComponent } from '@/components/AnalyticsComponent/useAnalyticsComponent.ts'

function AnalyticsComponent(data: AnalyticsComponentProps) {
  const { fields } = useAnalyticsComponent(data)

  return (
    <div className="space-y-6">
      <div>
        {fields.map(({ label, value }) => (
          <div key={label} className="flex justify-between mt-2 last:mb-0">
            <span>{label}:</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnalyticsComponent
