import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { DeckFormValues } from '@/entities'
import { Deck, useDeleteDeckMutation, useUpdateDeckMutation } from '@/services'
import { LineLoader, PATH, Tables, Typography, deckDefaultCover } from '@/shared'

import s from './DecksTable.module.scss'

import { HeadCellWithArrow, IconButtons, ImgBlock } from './../../../_components'
import { updatedDate } from './../../../_tools'

type DecksTableProps = {
  authorId?: string
  decks?: Deck[]
  sortTableOnClick: (title: string) => void
  tableSort: string
}

export const DecksTable = ({ authorId, decks, sortTableOnClick, tableSort }: DecksTableProps) => {
  // ----- Блок работы с удалением и редактированием колод -----
  const [deleteDeck, { isLoading: isDeleteDeckLoading }] = useDeleteDeckMutation()
  const [updateDeck, { isLoading: isUpdateDeckLoading }] = useUpdateDeckMutation()

  async function updateDeckHandler(id: string, data: DeckFormValues) {
    await updateDeck({ id, ...data })
    toast.success('Deck updated! All changes have been saved.')
  }

  async function deleteDeckHandler(id: string) {
    await deleteDeck({ id })
    toast.success("Deck removed. It's gone for good!")
  }

  // ----- Показывать Loader -----
  const isShowLineLoader = isDeleteDeckLoading || isUpdateDeckLoading

  return (
    <>
      {isShowLineLoader && <LineLoader />}
      <Tables.Table>
        <Tables.TableHead>
          <Tables.TableRow>
            <HeadCellWithArrow
              arrowDirection={tableSort !== 'name-asc'}
              sortTableOnClick={() => sortTableOnClick('name')}
              title={'Name'}
            />
            <HeadCellWithArrow
              arrowDirection={tableSort !== 'cardsCount-asc'}
              sortTableOnClick={() => sortTableOnClick('cardsCount')}
              title={'Cards'}
            />
            <HeadCellWithArrow
              arrowDirection={tableSort !== 'updated-asc'}
              sortTableOnClick={() => sortTableOnClick('updated')}
              title={'Last Updated'}
            />
            <HeadCellWithArrow
              arrowDirection={tableSort !== 'created-asc'}
              className={s.cellWidth}
              sortTableOnClick={() => sortTableOnClick('created')}
              title={'Created by'}
            />
            <Tables.TableHeadCell className={s.noHover}> </Tables.TableHeadCell>
          </Tables.TableRow>
        </Tables.TableHead>

        <Tables.TableBody>
          {decks?.map(deck => {
            return (
              <Tables.TableRow key={deck.id}>
                <Tables.TableBodyCell>
                  <ImgBlock
                    as={Link}
                    title={deck.name}
                    to={`${PATH.DECKSPAGE}/${deck.id}`}
                    url={deck.cover || deckDefaultCover}
                    wd={'250px'}
                  />
                </Tables.TableBodyCell>

                <Tables.TableBodyCell>
                  <Typography.Body2>{deck.cardsCount}</Typography.Body2>
                </Tables.TableBodyCell>

                <Tables.TableBodyCell>
                  <Typography.Body2>{updatedDate(deck.updated)}</Typography.Body2>
                </Tables.TableBodyCell>

                <Tables.TableBodyCell>
                  <Typography.Body2>{deck.author.name}</Typography.Body2>
                </Tables.TableBodyCell>

                <Tables.TableBodyCell>
                  <IconButtons
                    cardName={deck.name}
                    deckData={{ cover: deck.cover, isPrivate: deck.isPrivate, name: deck.name }}
                    deckId={deck.id}
                    deleteBtnType={'Deck'}
                    deleteCb={() => deleteDeckHandler(deck.id)}
                    disabled={deck.cardsCount === 0}
                    editDeckCb={(data: DeckFormValues) => updateDeckHandler(deck.id, data)}
                    showEditButtons={authorId === deck.userId}
                    showPlayButton
                  />
                </Tables.TableBodyCell>
              </Tables.TableRow>
            )
          })}
        </Tables.TableBody>
      </Tables.Table>
    </>
  )
}
