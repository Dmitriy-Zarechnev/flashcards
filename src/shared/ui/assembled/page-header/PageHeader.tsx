import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { useLogoutMutation, useMeQuery } from '@/services'
import { Button, DropdownProfile, Typography } from '@/shared'
import { PATH } from '@/shared/utils/routerVariables'

import s from './PageHeader.module.scss'

//import img from './Dropdown.webp'
import logo from './Logo.png'

type PageHeaderProps = {
  // data?: AuthResponse | null
} & ComponentPropsWithoutRef<'header'>

export const PageHeader = forwardRef<ElementRef<'header'>, PageHeaderProps>(({}, ref) => {
  const [isUserDataShow, setIsUserDataShow] = useState(true)
  const { data } = useMeQuery()

  const [logout] = useLogoutMutation()

  function logoutHandler() {
    logout()
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
            Sing In
          </Button>
        )}
      </div>
    </header>
  )
})
