import { GetCardsResponse } from '@/services/cards/cards.types'
import { HeadCellWithArrow, IconButtons, ImgBlock, Rating, Tables, Typography } from '@/shared'
import { updatedDate } from '@/shared/utils/updateDate'

import s from './CardsTable.module.scss'

import defImg from './../../../assets/card-default-cover.webp'

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
          <HeadCellWithArrow
            arrowDirection={false}
            sortTableOnClick={() => {}}
            title={'Question'}
          />
          <HeadCellWithArrow arrowDirection={false} sortTableOnClick={() => {}} title={'Answer'} />
          <HeadCellWithArrow
            arrowDirection={false}
            sortTableOnClick={() => {}}
            title={'Last Updated'}
          />
          <HeadCellWithArrow arrowDirection={false} sortTableOnClick={() => {}} title={'Grade'} />
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
