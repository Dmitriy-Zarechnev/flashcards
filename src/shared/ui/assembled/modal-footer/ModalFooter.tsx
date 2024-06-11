import { Link } from 'react-router-dom'

import { Button, Typography } from '@/shared'
import { clsx } from 'clsx'

import s from './ModalFooter.module.scss'

type ModalFooterProps = {
  buttonChildren: string
  className?: string
  footerText: string
  linkPath: string
}

export const ModalFooter = ({
  buttonChildren,
  className,
  footerText,
  linkPath,
  ...rest
}: ModalFooterProps) => {
  return (
    <div className={clsx(s.footerWrapper, className)} {...rest}>
      <Typography.Subtitle2>{footerText}</Typography.Subtitle2>
      <Button as={Link} className={s.linkButton} to={linkPath} variant={'link'}>
        {buttonChildren}
      </Button>
    </div>
  )
}
