import { HeadCellWithArrow } from '@/entities/tables/head-cell-with-arrow'
import { IconButtons } from '@/entities/tables/icon-buttons'
import { ImgBlock } from '@/entities/tables/image-block'
import { Rating, RatingValueType, Tables, Typography } from '@/shared'

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

type TableListProps = {
  tableData: TableData[]
}

export const TableList = ({ tableData }: TableListProps) => {
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