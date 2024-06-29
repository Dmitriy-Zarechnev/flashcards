import { useNavigate } from 'react-router-dom'

import { EditProfile } from '@/entities'
import { Page } from '@/shared'

import s from './Profile.module.scss'

import { BackToDecks } from '../_components/back-to-decks/BackToDecks'
import { getBackToDeckRoutingParams } from '../_tools/backRoutingWithParams'

export const ProfilePage = () => {
  const navigate = useNavigate()

  function routeBackToDecks() {
    navigate(getBackToDeckRoutingParams())
  }

  return (
    <Page className={s.wrapper}>
      <BackToDecks
        className={s.backToPrevious}
        navigationCb={routeBackToDecks}
        title={'Back to previous list'}
      />
      <EditProfile />
    </Page>
  )
}
