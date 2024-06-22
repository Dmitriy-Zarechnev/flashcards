import { Outlet } from 'react-router-dom'

import { PageHeader } from '@/shared'

import s from './Layout.module.scss'

export const Layout = () => {
  return (
    <div className={s.layout}>
      <PageHeader />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
