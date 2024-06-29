import { memo } from 'react'

import { Button, Icon } from '@/shared'

type BackToDecksProps = {
  className?: string
  navigationCb: () => void
  title: string
}

export const BackToDecks = memo(({ className, navigationCb, title }: BackToDecksProps) => {
  return (
    <Button className={className} onClick={navigationCb} variant={'link'}>
      <Icon iconId={'arrowBackOutline'} />
      {title}
    </Button>
  )
})
