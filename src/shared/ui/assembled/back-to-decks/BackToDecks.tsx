import { Link } from 'react-router-dom'

import { Button, Icon } from '@/shared'

type BackToDecksProps = {
  className?: string
  iconId: string
  title: string
}

export const BackToDecks = ({ className, iconId, title }: BackToDecksProps) => {
  return (
    <Button as={Link} className={className} to={`/decks`} variant={'link'}>
      <Icon iconId={iconId} />
      {title}
    </Button>
  )
}
