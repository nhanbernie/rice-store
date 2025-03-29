import { IconType } from '@/common/models/icons/icon.model'
import { DEFAULT_ICON_SIZE } from '@/common/constants/styles/sizes/common-sizes.constant'

const Icon = ({
  id,
  width = DEFAULT_ICON_SIZE.WIDTH,
  height = DEFAULT_ICON_SIZE.HEIGHT,
  className,
  ...props
}: IconType) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  )
}

export default Icon
