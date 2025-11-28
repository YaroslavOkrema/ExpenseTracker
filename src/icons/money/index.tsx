import type { JSX, SVGProps } from 'react'
import { CircleDollarSign } from 'lucide-react'
import { DEFAULT_ICON_SIZE } from '@/constants/constants.ts'

const MoneyIcon = ({
  width = DEFAULT_ICON_SIZE,
  height = DEFAULT_ICON_SIZE,
  ...props
}: SVGProps<SVGSVGElement>): JSX.Element => {
  return <CircleDollarSign width={width} height={height} {...props} />
}

export default MoneyIcon
