import { GetCardsResponse } from '@/services/cards/cards.types'
import { Rating, Tables, Typography } from '@/shared'
import { updatedDate } from '@/shared/utils/updateDate'

import s from '@/shared/ui/assembled/decks-table/DecksTable.module.scss'

import { HeadCellWithArrow } from '../head-cell-with-arrow'
import { IconButtons } from '../icon-buttons'
import { ImgBlock } from '../image-block'
import defImg from './defaultCardImg.jpg'

type CardsTableProps = {
  cards: GetCardsResponse[]
  editFunction: (id: string) => void
  trashFunction: (id: string) => void
  userId: boolean
}

export const CardsTable = ({ cards, editFunction, trashFunction, userId }: CardsTableProps) => {
  return (
    <Tables.Table>
      <Tables.TableHead>
        <Tables.TableRow>
          <HeadCellWithArrow arrowDirection={false} title={'Question'} />
          <HeadCellWithArrow arrowDirection={false} title={'Answer'} />
          <HeadCellWithArrow arrowDirection={false} title={'Last Updated'} />
          <HeadCellWithArrow arrowDirection={false} title={'Grade'} />
          {userId && <Tables.TableHeadCell className={s.noHover}></Tables.TableHeadCell>}
        </Tables.TableRow>
      </Tables.TableHead>

      <Tables.TableBody>
        {cards.map(card => {
          return (
            <Tables.TableRow key={card.id}>
              <Tables.TableBodyCell>
                <ImgBlock title={card.question} url={card.questionImg || defImg} />
              </Tables.TableBodyCell>

              <Tables.TableBodyCell>
                <ImgBlock title={card.answer} url={card.answerImg || defImg} />
              </Tables.TableBodyCell>

              <Tables.TableBodyCell>
                <Typography.Body2>{updatedDate(card.updated)}</Typography.Body2>
              </Tables.TableBodyCell>

              <Tables.TableBodyCell>
                <Rating rating={card.grade} />
              </Tables.TableBodyCell>

              {userId && (
                <Tables.TableBodyCell>
                  <IconButtons
                    editFunction={() => editFunction(card.id)}
                    trashFunction={() => trashFunction(card.id)}
                  />
                </Tables.TableBodyCell>
              )}
            </Tables.TableRow>
          )
        })}
      </Tables.TableBody>
    </Tables.Table>
  )
}
