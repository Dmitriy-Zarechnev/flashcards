import { useNavigate } from 'react-router-dom'

import { Button, Icon } from '@/shared'

type BackToDecksProps = {
  className?: string
  iconId: string
  title: string
}

export const BackToDecks = ({ className, iconId, title }: BackToDecksProps) => {
  const navigate = useNavigate()

  return (
    <Button className={className} onClick={() => navigate(-1)} variant={'link'}>
      <Icon iconId={iconId} />
      {title}
    </Button>
  )
}
