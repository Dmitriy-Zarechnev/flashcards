import { Outlet } from 'react-router-dom'

import { useMeQuery } from '@/services'
import { LineLoader, PageHeader } from '@/shared'

import s from './Layout.module.scss'

import { InitLoader } from './InitLoader/InitLoader'

export const Layout = () => {
  const { data, isLoading, isUninitialized } = useMeQuery()

  return (
    <div className={s.layout}>
      <LineLoader className={s.lineLoader} />
      <PageHeader data={data} />
      <main>{isLoading || isUninitialized ? <InitLoader /> : <Outlet />}</main>
    </div>
  )
}
