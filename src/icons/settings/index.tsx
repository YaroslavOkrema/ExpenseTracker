import type { JSX, SVGProps } from 'react'
import { Settings } from 'lucide-react'
import { DEFAULT_ICON_SIZE } from '@/constants/constants.ts'

const SettingsIcon = ({
  width = DEFAULT_ICON_SIZE,
  height = DEFAULT_ICON_SIZE,
  ...props
}: SVGProps<SVGSVGElement>): JSX.Element => {
  return <Settings width={width} height={height} {...props} />
}

export default SettingsIcon
