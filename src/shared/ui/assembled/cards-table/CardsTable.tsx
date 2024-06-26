import { toast } from 'react-toastify'

import { CardFormValues } from '@/entities'
import { useDeleteCardMutation, useUpdateCardMutation } from '@/services'
import { Card } from '@/services/types/decks.types'
import {
  HeadCellWithArrow,
  IconButtons,
  ImgBlock,
  LineLoader,
  Rating,
  Tables,
  Typography,
  cardDefaultCover,
} from '@/shared'
import { updatedDate } from '@/shared/utils/updateDate'

import s from './CardsTable.module.scss'

type CardsTableProps = {
  authorId?: boolean
  cards?: Card[]
  sortTableOnClick: (title: string) => void
  tableSort: string
}

export const CardsTable = ({ authorId, cards, sortTableOnClick, tableSort }: CardsTableProps) => {
  // ----- Блок работы с удалением и редактированием карточек в колоде -----
  const [deleteCard, { isLoading: isDeleteCardLoading }] = useDeleteCardMutation()
  const [updateCard, { isLoading: isUpdateCardLoading }] = useUpdateCardMutation()

  async function deleteCardHandler(id: string) {
    await deleteCard({ id })
    toast.success("Card removed. It's gone for good!")
  }

  async function updateCardHandler(id: string, data: CardFormValues) {
    await updateCard({ id, ...data })
    toast.success('Card updated! All changes have been saved.')
  }

  // ----- Показывать Loader -----
  const isShowLineLoader = isDeleteCardLoading || isUpdateCardLoading

  return (
    <>
      {isShowLineLoader && <LineLoader />}
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
                  <ImgBlock title={card.question} url={card.questionImg || cardDefaultCover} />
                </Tables.TableBodyCell>

                <Tables.TableBodyCell>
                  <ImgBlock title={card.answer} url={card.answerImg || cardDefaultCover} />
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
                      cardData={{
                        answer: card.answer,
                        answerImg: card.answerImg,
                        question: card.question,
                        questionImg: card.questionImg,
                      }}
                      cardName={'this card'}
                      deleteBtnType={'Card'}
                      deleteCb={() => deleteCardHandler(card.id)}
                      editCardCb={(data: CardFormValues) => updateCardHandler(card.id, data)}
                      showEditButtons
                      showPlayButton={false}
                    />
                  </Tables.TableBodyCell>
                )}
              </Tables.TableRow>
            )
          })}
        </Tables.TableBody>
      </Tables.Table>
    </>
  )
}
