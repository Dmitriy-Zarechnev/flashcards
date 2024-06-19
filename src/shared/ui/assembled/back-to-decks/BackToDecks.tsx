import { Link } from 'react-router-dom'

import { Button, Icon, PATH } from '@/shared'

type BackToDecksProps = {
  className?: string
  iconId: string
  title: string
}

export const BackToDecks = ({ className, iconId, title }: BackToDecksProps) => {
  return (
    <Button as={Link} className={className} to={PATH.DECKSPAGE} variant={'link'}>
      <Icon iconId={iconId} />
      {title}
    </Button>
  )
}
