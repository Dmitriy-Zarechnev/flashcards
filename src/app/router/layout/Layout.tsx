import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { useMeQuery } from '@/services'
import { PageHeader } from '@/shared'

import 'react-toastify/dist/ReactToastify.css'

import s from './Layout.module.scss'

import { InitLoader } from './InitLoader/InitLoader'

export const Layout = () => {
  const { isLoading, isUninitialized } = useMeQuery()

  return (
    <div className={s.layout}>
      <PageHeader />
      <main>{isLoading || isUninitialized ? <InitLoader /> : <Outlet />}</main>
      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable={false}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        pauseOnHover
        position={'bottom-left'}
        rtl={false}
        theme={'dark'}
      />
    </div>
  )
}
