import { clsx } from 'clsx'

import s from './ModalFooter.module.scss'

import { Button } from '../button'
import { Typography } from '../typography'

type ModalFooterProps = {
  buttonChildren: string
  className?: string
  footerText: string
}

export const ModalFooter = ({
  buttonChildren,
  className,
  footerText,
  ...rest
}: ModalFooterProps) => {
  return (
    <div className={clsx(s.footerWrapper, className)} {...rest}>
      <Typography.Subtitle2>{footerText}</Typography.Subtitle2>
      <Button className={s.linkButton} variant={'secondary'}>
        {buttonChildren}
      </Button>
    </div>
  )
}
