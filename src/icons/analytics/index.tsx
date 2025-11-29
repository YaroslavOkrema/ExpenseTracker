import type { JSX, SVGProps } from 'react'
import { ChartNoAxesCombined } from 'lucide-react'
import { DEFAULT_ICON_SIZE } from '@/constants/constants.ts'

const AnalyticsIcon = ({
  width = DEFAULT_ICON_SIZE,
  height = DEFAULT_ICON_SIZE,
  ...props
}: SVGProps<SVGSVGElement>): JSX.Element => {
  return <ChartNoAxesCombined width={width} height={height} {...props} />
}

export default AnalyticsIcon
