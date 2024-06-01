import { Rating, Tables, Typography } from '@/shared'
import defImg from '@/shared/ui/assembled/tables/assets/defaultPicture.jpg'
import { HeadCellWithArrow } from '@/shared/ui/assembled/tables/head-cell-with-arrow'
import { IconButtons } from '@/shared/ui/assembled/tables/icon-buttons'
import { ImgBlock } from '@/shared/ui/assembled/tables/image-block'

export const CardsTable = () => {
  const tableData = [
    {
      firstCell: {
        imgUrl: defImg,
        text: 'Cell 1ed/ui/assembled/tables/image-block ed/ui/assembled/tables/image-blocked/ui/assembled/tables/image-block ',
      },
      forthCell: 'Cell 4',
      id: 'uniq1',
      rating: 2,
      secondCell: 'Cell 2',
      thirdCell: 'Cell 1',
    },

    {
      firstCell: { imgUrl: defImg, text: 'Cell 1' },
      forthCell: 'Cell 4',
      id: 'uniq2',
      rating: 4,
      secondCell: 'Cell 2',
      thirdCell: 'Cell 1',
    },
  ]

  return (
    <Tables.Table>
      <Tables.TableHead>
        <Tables.TableRow>
          <Tables.TableHeadCell>
            <Typography.Subtitle2>Question</Typography.Subtitle2>
          </Tables.TableHeadCell>
          <Tables.TableHeadCell>
            <Typography.Subtitle2>Answer</Typography.Subtitle2>
          </Tables.TableHeadCell>
          <Tables.TableHeadCell>
            <HeadCellWithArrow title={'Last Updated'} />
          </Tables.TableHeadCell>
          <Tables.TableHeadCell>
            <Typography.Subtitle2>Grade</Typography.Subtitle2>
          </Tables.TableHeadCell>
          <Tables.TableHeadCell>
            <Typography.Subtitle2></Typography.Subtitle2>
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
                <Rating rating={el.rating} />
              </Tables.TableBodyCell>

              <Tables.TableBodyCell>
                <IconButtons
                  editFunction={() => {}}
                  id={el.id}
                  showPlayButton
                  trashFunction={() => {}}
                />
              </Tables.TableBodyCell>
            </Tables.TableRow>
          )
        })}
      </Tables.TableBody>
    </Tables.Table>
  )
}
