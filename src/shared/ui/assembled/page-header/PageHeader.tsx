import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Link } from 'react-router-dom'

import { useMeQuery } from '@/services'
import { Button, DropdownProfile, Typography } from '@/shared'

import s from './PageHeader.module.scss'

import profileImage from '../dropdown-profile/Dropdown.webp'
import logo from './Logo.png'

type PageHeaderProps = {
  isSingUp: boolean
} & ComponentPropsWithoutRef<'header'>

export const PageHeader = forwardRef<ElementRef<'header'>, PageHeaderProps>(({ isSingUp }, ref) => {
  // ----- Запрос для получения данных пользователя -----
  const { data } = useMeQuery()

  return (
    <header ref={ref}>
      <div className={s.wrapper}>
        <Link to={'/decks'}>
          <img alt={'Project Picture'} className={s.projectPicture} src={logo} />
        </Link>

        {isSingUp ? (
          <div className={s.profileInfo}>
            <Link to={'/profile'}>
              <Typography.Subtitle1>{data?.name}</Typography.Subtitle1>
            </Link>
            <DropdownProfile
              email={data?.email ?? 'user@yandex.com'}
              name={data?.name ?? 'User'}
              photo={data?.avatar ?? profileImage}
              photoDescription={`${data?.name} - avatar`}
            />
          </div>
        ) : (
          <Button variant={'secondary'}>Sing In</Button>
        )}
      </div>
    </header>
  )
})
