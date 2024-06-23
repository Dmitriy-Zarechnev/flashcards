import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { useLineLoading, useMeQuery } from '@/services'
import { LineLoader, PageHeader } from '@/shared'

import s from './Layout.module.scss'

import { InitLoader } from './InitLoader/InitLoader'

export const Layout = () => {
  // const [isUserData, setIsUserData] = useState(false)
  const { data, isLoading, isUninitialized } = useMeQuery()

  const { isLineLoading } = useLineLoading()

  // function logout() {
  //   localStorage.removeItem('accessToken')
  //   localStorage.removeItem('refreshToken')
  //
  //   /* запрос не пройдет, и пользователь будет переведен на авторизацию */
  //   refetch()
  //   /* и удолять данные пользователя, сами они не очищаются - я думаю из-за кеширования me запрсоа */
  //   setIsUserData(true)
  // }
  //
  // /* костыль для очищения данных пользователя при logout */
  // const isShowUserData = isUserData ? null : data

  return (
    <div className={s.layout}>
      {isLineLoading && <LineLoader className={s.lineLoader} />}
      <PageHeader data={data} />

      <main>{isLoading || isUninitialized ? <InitLoader /> : <Outlet />}</main>
    </div>
  )
}
