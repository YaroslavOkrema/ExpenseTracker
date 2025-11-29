import type { JSX, SVGProps } from 'react'
import { ArrowLeftRight } from 'lucide-react'
import { DEFAULT_ICON_SIZE } from '@/constants/constants.ts'

const TransactionIcon = ({
  width = DEFAULT_ICON_SIZE,
  height = DEFAULT_ICON_SIZE,
  ...props
}: SVGProps<SVGSVGElement>): JSX.Element => {
  return <ArrowLeftRight width={width} height={height} {...props} />
}

export default TransactionIcon
