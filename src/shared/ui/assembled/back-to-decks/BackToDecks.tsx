import { Button, Icon } from '@/shared'

type BackToDecksProps = {
  className?: string
  iconId: string
  title: string
}

export const BackToDecks = ({ className, iconId, title }: BackToDecksProps) => {
  return (
    <Button as={'a'} className={className} variant={'link'}>
      <Icon iconId={iconId} />
      {title}
    </Button>
  )
}
