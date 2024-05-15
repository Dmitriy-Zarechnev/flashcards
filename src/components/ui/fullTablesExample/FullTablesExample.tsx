import { Icon } from '@/components/ui/icon'

import s from './FullTablesExample.module.scss'

import defImg from '../../../assets/defaultPicture.jpg'

export const FullTablesExample = () => {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr className={s.tr}>
          <th className={s.th}>Name</th>
          <th className={s.th}>
            Name
            <Icon className={s.ArrowIcon} height={'12px'} iconId={'arrowUp'} width={'12px'} />
          </th>
          <th className={s.th}>Name</th>
          <th className={s.th}>Name</th>
          <th className={s.th}>Name</th>
          <th className={s.th}>Name</th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        <tr className={s.tr}>
          <td className={s.td}>
            <img alt={'picture'} src={defImg} />
            <span>Name</span>
          </td>
          <td className={s.td}>Алексей</td>
          <td className={s.td}>30</td>
          <td className={s.td}>Москва</td>
          <td className={s.td}>30</td>
          <td className={s.td}>Москваasdddasd</td>
        </tr>
        <tr className={s.tr}>
          <td className={s.td}>2</td>
          <td className={s.td}>Мария</td>
          <td className={s.td}>25</td>
          <td className={s.td}>Санкт-Петербург</td>
        </tr>
      </tbody>
    </table>
  )
}
