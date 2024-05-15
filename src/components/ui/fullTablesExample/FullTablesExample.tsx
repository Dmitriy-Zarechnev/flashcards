import { Icon } from '@/components/ui/icon'
import { Rating } from '@/components/ui/rating'

import s from './FullTablesExample.module.scss'

import defImg from '../../../assets/defaultPicture.jpg'

export const FullTablesExample = () => {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr className={s.tr}>
          <th className={s.th}>Name 1</th>
          <th className={s.th}>
            Name
            <Icon className={s.ArrowIcon} height={'12px'} iconId={'arrowUp'} width={'12px'} />
          </th>
          <th className={s.th}>Name 1</th>
          <th className={s.th}>Name 1</th>
          <th className={s.th}>Name 1</th>
          <th className={s.th}>Name 1</th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        <tr className={s.tr}>
          <td className={s.tdFlex}>
            <img alt={'picture'} src={defImg} />
            Name 2
          </td>
          <td className={s.td}>Name 2</td>
          <td className={s.td}>Name 2</td>
          <td className={s.td}>Name 2</td>
          <td className={s.td}>
            <Rating rating={4} />
          </td>
          <td className={s.td}>Name 2</td>
        </tr>
        <tr className={s.tr}>
          <td className={s.tdFlex}>
            <img alt={'picture'} src={defImg} />
            Name 3
          </td>
          <td className={s.td}>Name 3</td>
          <td className={s.td}>Name 3</td>
          <td className={s.td}>Name 3</td>
          <td className={s.td}>
            <Rating rating={3} />
          </td>
          <td className={s.td}>Name 3</td>
        </tr>
      </tbody>
    </table>
  )
}
