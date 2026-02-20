import type { JSX, SVGProps } from 'react'
import { RefreshCw } from 'lucide-react'
import { DEFAULT_ICON_SIZE } from '@/constants/constants.ts'

const ConverterIcon = ({
    width = DEFAULT_ICON_SIZE,
    height = DEFAULT_ICON_SIZE,
    ...props
}: SVGProps<SVGSVGElement>): JSX.Element => {
    return <RefreshCw width={width} height={height} {...props} />
}

export default ConverterIcon
