import { Icon } from '@/components/ui/icon'
import { IconButtons } from '@/components/ui/iconButtons'
import { Rating } from '@/components/ui/rating'
import { Tables } from '@/components/ui/tables'

import s from './FullTablesExample.module.scss'

import defImg from '../../../assets/defaultPicture.jpg'

type TableData = {
  fifthCell: number
  firstCell: FirstCell
  forthCell: string
  id: string
  secondCell: string
  thirdCell: string
}

type FirstCell = {
  imgUrl: string
  text: string
}

export const FullTablesExample = () => {
  const tableData: TableData[] = [
    {
      fifthCell: 2,
      firstCell: { imgUrl: defImg, text: 'Cell 1' },
      forthCell: 'Cell 4',
      id: '1',
      secondCell: 'Cell 2',
      thirdCell: 'Cell 1',
    },

    {
      fifthCell: 4,
      firstCell: { imgUrl: defImg, text: 'Cell 1' },
      forthCell: 'Cell 4',
      id: '1',
      secondCell: 'Cell 2',
      thirdCell: 'Cell 1',
    },
  ]

  return (
    <Tables.Table>
      <Tables.TableHead>
        <Tables.TableRow>
          <Tables.TableHeadCell>Name 1</Tables.TableHeadCell>
          <Tables.TableHeadCell>
            Name
            <Icon className={s.ArrowIcon} height={'12px'} iconId={'arrowUp'} width={'12px'} />
          </Tables.TableHeadCell>
          <Tables.TableHeadCell>Name 1</Tables.TableHeadCell>
          <Tables.TableHeadCell>Name 1</Tables.TableHeadCell>
          <Tables.TableHeadCell>Name 1</Tables.TableHeadCell>
          <Tables.TableHeadCell>Name 1</Tables.TableHeadCell>
        </Tables.TableRow>
      </Tables.TableHead>

      <Tables.TableBody>
        {/*{tableData.map(el)=>{*/}
        {/*  return{}*/}
        {/*}}*/}

        <Tables.TableRow>
          <Tables.TableBodyCell className={s.tdFlex}>
            <img alt={'picture'} src={defImg} />
            Name 2
          </Tables.TableBodyCell>

          <Tables.TableBodyCell>Name 2</Tables.TableBodyCell>
          <Tables.TableBodyCell>Name 2</Tables.TableBodyCell>
          <Tables.TableBodyCell>Name 2</Tables.TableBodyCell>

          <Tables.TableBodyCell>
            <Rating rating={4} />
          </Tables.TableBodyCell>

          <Tables.TableBodyCell>
            <IconButtons />
          </Tables.TableBodyCell>
        </Tables.TableRow>

        <Tables.TableRow>
          <Tables.TableBodyCell className={s.tdFlex}>
            <img alt={'picture'} src={defImg} />
            Name 3
          </Tables.TableBodyCell>

          <Tables.TableBodyCell>Name 3</Tables.TableBodyCell>
          <Tables.TableBodyCell>Name 3</Tables.TableBodyCell>
          <Tables.TableBodyCell>Name 3</Tables.TableBodyCell>

          <Tables.TableBodyCell>
            <Rating rating={3} />
          </Tables.TableBodyCell>

          <Tables.TableBodyCell>
            <IconButtons />
          </Tables.TableBodyCell>
        </Tables.TableRow>
      </Tables.TableBody>
    </Tables.Table>
  )
}
