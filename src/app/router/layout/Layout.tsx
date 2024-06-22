import { Outlet } from 'react-router-dom'

import { useMeQuery } from '@/services'
import { PageHeader } from '@/shared'

import s from './Layout.module.scss'

import { InitLoader } from './InitLoader/InitLoader'

export const Layout = () => {
  const { data, isLoading, isUninitialized } = useMeQuery()

  return (
    <div className={s.layout}>
      <PageHeader data={data} />
      <main>{isLoading || isUninitialized ? <InitLoader /> : <Outlet />}</main>
    </div>
  )
}
