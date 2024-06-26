import { EditProfile } from '@/entities'
import { BackToDecks, Page } from '@/shared'

import s from './Profile.module.scss'

export const ProfilePage = () => {
  return (
    <Page className={s.wrapper}>
      <BackToDecks className={s.backToPrevious} title={'Back to previous list'} />
      <EditProfile />
    </Page>
  )
}
