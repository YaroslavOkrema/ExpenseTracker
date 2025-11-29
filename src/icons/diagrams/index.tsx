import type { JSX, SVGProps } from 'react'
import { DEFAULT_ICON_SIZE } from '@/constants/constants.ts'
import { BarChart3 } from 'lucide-react'

const DiagramsIcon = ({
  width = DEFAULT_ICON_SIZE,
  height = DEFAULT_ICON_SIZE,
  ...props
}: SVGProps<SVGSVGElement>): JSX.Element => {
  return <BarChart3 width={width} height={height} {...props} />
}

export default DiagramsIcon
