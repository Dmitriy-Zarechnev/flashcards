import { Link } from 'react-router-dom'

import { Deck } from '@/services'
import { HeadCellWithArrow, IconButtons, ImgBlock, Tables, Typography } from '@/shared'
import { updatedDate } from '@/shared/utils/updateDate'

import s from './DecksTable.module.scss'

import defImg from './../../../assets/card-default-cover.webp'

type DecksTableProps = {
  authorId?: string
  clickDeleteDeck: (id: string) => void
  clickUpdateDeck: (id: string) => void
  decks?: Deck[]
  playFunction: () => void
  sortTableOnClick: (title: string) => void
  tableSort: string
}

export const DecksTable = ({
  authorId,
  clickDeleteDeck,
  clickUpdateDeck,
  decks,
  playFunction,
  sortTableOnClick,
  tableSort,
}: DecksTableProps) => {
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
                  to={`/decks/${deck.id}`}
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
                  editFunction={() => clickUpdateDeck(deck.id)}
                  playFunction={() => playFunction()}
                  showEditButtons={authorId === deck.author.id}
                  showPlayButton
                  trashFunction={() => clickDeleteDeck(deck.id)}
                />
              </Tables.TableBodyCell>
            </Tables.TableRow>
          )
        })}
      </Tables.TableBody>
    </Tables.Table>
  )
}
