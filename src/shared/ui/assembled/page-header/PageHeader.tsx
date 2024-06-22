import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Link } from 'react-router-dom'

import { useMeQuery } from '@/services'
import { Button, DropdownProfile, Typography } from '@/shared'
import { PATH } from '@/shared/utils/routerVariables'

import s from './PageHeader.module.scss'

//import img from './Dropdown.webp'
import logo from './Logo.png'

type PageHeaderProps = {} & ComponentPropsWithoutRef<'header'>

export const PageHeader = forwardRef<ElementRef<'header'>, PageHeaderProps>((_, ref) => {
  // ----- Запрос для получения данных пользователя -----
  const { data } = useMeQuery()

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
