import { Outlet } from 'react-router-dom'

import { useMeQuery } from '@/services'
import { PageHeader } from '@/shared'

import s from './Layout.module.scss'

import { InitLoader } from './InitLoader/InitLoader'

export const Layout = () => {
  const { isLoading, isUninitialized } = useMeQuery()

  return (
    <div className={s.layout}>
      <PageHeader />
      <main>{isLoading || isUninitialized ? <InitLoader /> : <Outlet />}</main>
    </div>
  )
}
