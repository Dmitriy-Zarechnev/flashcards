import { ComponentPropsWithoutRef, ElementRef, forwardRef, useEffect, useState } from 'react'
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
  const [isUserDataShow, setIsUserDataShow] = useState(false)
  const { data, isError } = useMeQuery()

  const [logout] = useLogoutMutation()

  useEffect(() => {
    /* ⛔ костыль против кеширования! При вылогинивании в стейте была и дата от удачного запроса и ошибка при запросе без токенов
          => если есть дата и нет ошибки, то будет отображать данные */
    if (!!data && !isError) {
      setIsUserDataShow(true)
    }
  }, [data, isError])

  function logoutHandler() {
    logout()
    setIsUserDataShow(false)
  }

  return (
    <header ref={ref}>
      <div className={s.wrapper}>
        <Link to={PATH.DECKSPAGE}>
          <img alt={'Project Picture'} className={s.projectPicture} src={logo} />
        </Link>

        {isUserDataShow ? (
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
