import { Button, Icon } from '@/shared'
import { clsx } from 'clsx'

import s from './BackToDecks.module.scss'

type BackToDecksProps = {
  className?: string
  iconId: string
  title: string
}

export const BackToDecks = ({ className, iconId, title }: BackToDecksProps) => {
  return (
    <Button as={'a'} className={clsx(s.linkBackButton, className)}>
      <Icon iconId={iconId} />
      {title}
    </Button>
  )
}
