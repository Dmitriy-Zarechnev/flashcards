import iconsSprite from '../../../assets/icons/sprite_svg.svg'

type IconProps = {
  className?: string
  height?: string
  iconId: string
  viewBox?: string
  width?: string
}

export const Icon = (props: IconProps) => {
  return (
    <svg
      className={props.className}
      height={props.height || '16'}
      viewBox={props.viewBox || '0 0 24 24'}
      width={props.width || '16'}
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  )
}
