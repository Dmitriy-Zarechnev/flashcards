import { Outlet } from 'react-router-dom'

import { InitLoader } from '@/app/router/InitLoader'
import { useMeQuery } from '@/services'
import { PageHeader } from '@/shared'

import s from './Layout.module.scss'

export const Layout = () => {
  const { data, isLoading, isUninitialized } = useMeQuery()

  return (
    <div className={s.layout}>
      <PageHeader data={data} />
      <main>{isLoading || isUninitialized ? <InitLoader /> : <Outlet />}</main>
    </div>
  )
}
