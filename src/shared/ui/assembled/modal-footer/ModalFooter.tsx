import { Button, Typography } from '@/shared'
import { clsx } from 'clsx'

import s from './ModalFooter.module.scss'

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
      <Button as={'a'} className={s.linkButton} variant={'link'}>
        {buttonChildren}
      </Button>
    </div>
  )
}
