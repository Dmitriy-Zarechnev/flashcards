import { HeadCellWithArrow } from '@/components/ui/headCellWithArrow'
import { IconButtons } from '@/components/ui/iconButtons'
import { ImgBlock } from '@/components/ui/imgBlock'
import { Rating, RatingValueType } from '@/components/ui/rating'
import { Tables } from '@/components/ui/tables'
import { Typography } from '@/components/ui/typography'

export type TableData = {
  firstCell: FirstCell
  forthCell: string
  id: string
  rating: RatingValueType
  secondCell: string
  thirdCell: string
}

type FirstCell = {
  imgUrl: string
  text: string
}

type FullTablesExampleProps = {
  tableData: TableData[]
}

export const FullTablesExample = ({ tableData }: FullTablesExampleProps) => {
  return (
    <Tables.Table>
      <Tables.TableHead>
        <Tables.TableRow>
          <Tables.TableHeadCell>
            <Typography.Subtitle2>Name 1</Typography.Subtitle2>
          </Tables.TableHeadCell>
          <Tables.TableHeadCell>
            <HeadCellWithArrow title={'Name 1'} />
          </Tables.TableHeadCell>
          <Tables.TableHeadCell>
            <Typography.Subtitle2>Name 1</Typography.Subtitle2>
          </Tables.TableHeadCell>
          <Tables.TableHeadCell>
            <Typography.Subtitle2>Name 1</Typography.Subtitle2>
          </Tables.TableHeadCell>
          <Tables.TableHeadCell>
            <Typography.Subtitle2>Name 1</Typography.Subtitle2>
          </Tables.TableHeadCell>
          <Tables.TableHeadCell>
            <Typography.Subtitle2>Name 1</Typography.Subtitle2>
          </Tables.TableHeadCell>
        </Tables.TableRow>
      </Tables.TableHead>

      <Tables.TableBody>
        {tableData.map(el => {
          return (
            <Tables.TableRow key={el.id}>
              <Tables.TableBodyCell>
                <ImgBlock title={el.firstCell.text} url={el.firstCell.imgUrl} />
              </Tables.TableBodyCell>

              <Tables.TableBodyCell>
                <Typography.Body2>{el.secondCell}</Typography.Body2>
              </Tables.TableBodyCell>
              <Tables.TableBodyCell>
                <Typography.Body2>{el.thirdCell}</Typography.Body2>
              </Tables.TableBodyCell>
              <Tables.TableBodyCell>
                <Typography.Body2>{el.forthCell}</Typography.Body2>
              </Tables.TableBodyCell>

              <Tables.TableBodyCell>
                <Rating rating={el.rating} />
              </Tables.TableBodyCell>

              <Tables.TableBodyCell>
                <IconButtons id={el.id} />
              </Tables.TableBodyCell>
            </Tables.TableRow>
          )
        })}
      </Tables.TableBody>
    </Tables.Table>
  )
}
