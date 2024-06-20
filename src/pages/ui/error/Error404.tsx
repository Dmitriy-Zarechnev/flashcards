import { Link } from 'react-router-dom'

import { Button, Typography } from '@/shared'
import { PATH } from '@/shared/utils/routerVariables'

import s from './Error404.module.scss'

import image from './error-img.webp'

export const Error404 = () => {
  return (
    <div className={s.error}>
      <img alt={'404'} src={image} />
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Typography.Body1>Sorry! Page isn't found!</Typography.Body1>
      <Button as={Link} fullWidth={false} to={PATH.DECKSPAGE}>
        Back to home page
      </Button>
    </div>
  )
}
