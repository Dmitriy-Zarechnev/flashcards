import { Button, Icon, IconButton, Typography } from '@/shared'

import s from './InfoPanel.module.scss'

type InfoPanelProps = {
  email: string
  name: string
  onClick: () => void
}

export const InfoPanel = ({ email, name, onClick }: InfoPanelProps) => {
  return (
    <div className={s.infoPanel}>
      <Typography.H2>{name}</Typography.H2>
      <Typography.Body2 className={s.email}>{email}</Typography.Body2>
      <Button variant={'secondary'}>
        <Icon iconId={'logOut'} />
        Logout
      </Button>
      <IconButton className={s.editBtn} iconId={'editOutline'} onClick={onClick} />
    </div>
  )
}
