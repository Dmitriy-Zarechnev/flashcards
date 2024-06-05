import { SortValue } from '@/features'
import { GetCardsResponse } from '@/services'
import {
  HeadCellWithArrow,
  IconButtons,
  ImgBlock,
  Rating,
  Tables,
  Typography,
  updatedDate,
} from '@/shared'

import s from './CardsTable.module.scss'

import defImg from './../../../assets/card-default-cover.webp'

type CardsTableProps = {
  cardTableSort: SortValue
  cards: GetCardsResponse[]
  editFunction: (id: string) => void
  sortOnClick: (sortValue: SortValue) => void
  trashFunction: (id: string) => void
  userId: boolean
}

export const CardsTable = ({
  cardTableSort,
  cards,
  editFunction,
  sortOnClick,
  trashFunction,
  userId,
}: CardsTableProps) => {
  return (
    <Tables.Table>
      <Tables.TableHead>
        <Tables.TableRow>
          <HeadCellWithArrow
            arrowDirection={cardTableSort !== 'question'}
            sortTableOnClick={() => sortOnClick('question')}
            title={'Question'}
          />
          <HeadCellWithArrow
            arrowDirection={cardTableSort !== 'answer'}
            sortTableOnClick={() => sortOnClick('answer')}
            title={'Answer'}
          />
          <HeadCellWithArrow
            arrowDirection={cardTableSort !== 'updated'}
            sortTableOnClick={() => sortOnClick('updated')}
            title={'Last Updated'}
          />
          <HeadCellWithArrow
            arrowDirection={cardTableSort !== 'grade'}
            sortTableOnClick={() => sortOnClick('grade')}
            title={'Grade'}
          />
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
