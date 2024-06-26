import { Button, Icon, IconButton, Typography } from '@/shared'

import s from './InfoPanel.module.scss'

type InfoPanelProps = {
  editName: () => void
  email?: string
  logout: () => void
  name?: string
}

export const InfoPanel = ({ editName, email, logout, name }: InfoPanelProps) => {
  return (
    <div className={s.infoPanel}>
      <div className={s.nameWrapper}>
        <Typography.H2>{name}</Typography.H2>
        <IconButton className={s.editBtn} iconId={'editOutline'} onClick={editName} />
      </div>
      <Typography.Body2 style={{ color: 'var(--color-dark-100)' }}>{email}</Typography.Body2>
      <Button onClick={logout} variant={'secondary'}>
        <Icon iconId={'logOut'} />
        Logout
      </Button>
    </div>
  )
}
