import { Link } from 'react-router-dom'

import { Deck, useDeleteDeckMutation, useUpdateDeckMutation } from '@/services'
import { HeadCellWithArrow, IconButtons, ImgBlock, Tables, Typography } from '@/shared'
import { PATH } from '@/shared/utils/routerVariables'
import { updatedDate } from '@/shared/utils/updateDate'

import s from './DecksTable.module.scss'

import defImg from './../../../assets/card-default-cover.webp'

type DecksTableProps = {
  authorId?: string
  decks?: Deck[]
  sortTableOnClick: (title: string) => void
  tableSort: string
}

export const DecksTable = ({ authorId, decks, sortTableOnClick, tableSort }: DecksTableProps) => {
  // ----- Блок работы с удалением и редактированием колод -----
  const [deleteDeck] = useDeleteDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()

  const updateDeckHandler = (id: string) => {
    updateDeck({ id, isPrivate: false, name: 'hello' })
  }
  const deleteDeckHandler = (id: string) => {
    deleteDeck({ id })
  }
  const playDeckHandler = () => {}

  return (
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
                  url={deck.cover || defImg}
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
                  disabled={deck.cardsCount === 0}
                  editFunction={() => updateDeckHandler(deck.id)}
                  playFunction={() => playDeckHandler()}
                  showEditButtons={authorId === deck.author.id}
                  showPlayButton
                  trashFunction={() => deleteDeckHandler(deck.id)}
                />
              </Tables.TableBodyCell>
            </Tables.TableRow>
          )
        })}
      </Tables.TableBody>
    </Tables.Table>
  )
}
