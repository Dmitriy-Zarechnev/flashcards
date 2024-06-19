import { Card } from '@/services/types/decks.types'
import { HeadCellWithArrow, IconButtons, ImgBlock, Rating, Tables, Typography } from '@/shared'
import { updatedDate } from '@/shared/utils/updateDate'

import s from './CardsTable.module.scss'

import defImg from './../../../assets/card-default-cover.webp'

type CardsTableProps = {
  authorId?: boolean
  cards?: Card[]
  editFunction: (id: string) => void
  sortTableOnClick: (title: string) => void
  tableSort: string
  trashFunction: (id: string) => void
}

export const CardsTable = ({
  authorId,
  cards,
  editFunction,
  sortTableOnClick,
  tableSort,
  trashFunction,
}: CardsTableProps) => {
  return (
    <Tables.Table>
      <Tables.TableHead>
        <Tables.TableRow>
          <HeadCellWithArrow
            arrowDirection={tableSort !== 'question-asc'}
            sortTableOnClick={() => sortTableOnClick('question')}
            title={'Question'}
          />
          <HeadCellWithArrow
            arrowDirection={tableSort !== 'answer-asc'}
            sortTableOnClick={() => sortTableOnClick('answer')}
            title={'Answer'}
          />
          <HeadCellWithArrow
            arrowDirection={tableSort !== 'updated-asc'}
            sortTableOnClick={() => sortTableOnClick('updated')}
            title={'Last Updated'}
          />
          <HeadCellWithArrow
            arrowDirection={tableSort !== 'grade-asc'}
            sortTableOnClick={() => sortTableOnClick('grade')}
            title={'Grade'}
          />
          {authorId && <Tables.TableHeadCell className={s.noHover}></Tables.TableHeadCell>}
        </Tables.TableRow>
      </Tables.TableHead>

      <Tables.TableBody>
        {cards?.map(card => {
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

              {authorId && (
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
