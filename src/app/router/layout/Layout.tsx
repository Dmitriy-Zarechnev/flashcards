import { Outlet } from 'react-router-dom'

import { useLineLoading, useLogoutMutation, useMeQuery } from '@/services'
import { LineLoader, PageHeader } from '@/shared'

import s from './Layout.module.scss'

import { InitLoader } from './InitLoader/InitLoader'

export const Layout = () => {
  const { data, isLoading, isUninitialized } = useMeQuery()

  const { isLineLoading } = useLineLoading()

  const [logout] = useLogoutMutation()

  return (
    <div className={s.layout}>
      {isLineLoading && <LineLoader className={s.lineLoader} />}
      <PageHeader data={data} />

      <main>{isLoading || isUninitialized ? <InitLoader /> : <Outlet />}</main>
      <button onClick={() => logout()}>LOGOUT</button>
    </div>
  )
}
