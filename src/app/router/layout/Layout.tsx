import { Outlet } from 'react-router-dom'

import { useLineLoading, useMeQuery } from '@/services'
import { LineLoader, PageHeader } from '@/shared'

import s from './Layout.module.scss'

import { InitLoader } from './InitLoader/InitLoader'

export const Layout = () => {
  const { isLoading, isUninitialized } = useMeQuery()

  const { isLineLoading } = useLineLoading()

  return (
    <div className={s.layout}>
      {isLineLoading && <LineLoader className={s.lineLoader} />}
      <PageHeader />
      <main>{isLoading || isUninitialized ? <InitLoader /> : <Outlet />}</main>
    </div>
  )
}
