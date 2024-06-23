import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { useLogoutMutation, useMeQuery } from '@/services'
import { flashcardsApi } from '@/services/api/flashcards.api'
import { Button, DropdownProfile, PATH, Typography } from '@/shared'

import s from './PageHeader.module.scss'

import logo from './Logo.png'

type PageHeaderProps = {} & ComponentPropsWithoutRef<'header'>

export const PageHeader = forwardRef<ElementRef<'header'>, PageHeaderProps>(({}, ref) => {
  const dispatch = useDispatch()
  const { data } = useMeQuery()
  const [logout] = useLogoutMutation()

  async function logoutHandler() {
    await logout()
    /* ⛔ только так смог побороть кеширвоание при me запросе ⛔ */
    dispatch(flashcardsApi.util.resetApiState())
  }

  return (
    <header ref={ref}>
      <div className={s.wrapper}>
        <Link to={PATH.DECKSPAGE}>
          <img alt={'Project Picture'} className={s.projectPicture} src={logo} />
        </Link>

        {data ? (
          <div className={s.profileInfo}>
            <Link to={PATH.PROFILE}>
              <Typography.Subtitle1>{data?.name}</Typography.Subtitle1>
            </Link>
            <DropdownProfile
              email={data?.email ?? 'user@yandex.com'}
              logout={logoutHandler}
              name={data?.name ?? 'User'}
              photo={data?.avatar}
              photoDescription={`${data?.name} - avatar`}
            />
          </div>
        ) : (
          <Button as={Link} to={PATH.SIGNIN} variant={'primary'}>
            Sign In
          </Button>
        )}
      </div>
    </header>
  )
})
