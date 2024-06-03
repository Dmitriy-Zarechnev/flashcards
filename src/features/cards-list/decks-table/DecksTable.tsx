import { HeadCellWithArrow } from '@/features/cards-list/cards-table/head-cell-with-arrow'
import { IconButtons } from '@/features/cards-list/cards-table/icon-buttons'
import { ImgBlock } from '@/features/cards-list/cards-table/image-block'
import { updatedDate } from '@/features/cards-list/utils/updateDate'
import { Deck } from '@/services/decks/decks.types'
import { Tables, Typography } from '@/shared'

import s from './DecksTable.module.scss'

import defImg from './defaultDeckImg.jpg'

type DecksTableProps = {
  clickDeleteDeck: (id: string) => void
  clickUpdateDeck: (id: string) => void
  decks?: Deck[]
  playFunction: () => void
  userId: boolean
}

export const DecksTable = ({
  clickDeleteDeck,
  clickUpdateDeck,
  decks,
  playFunction,
  userId,
}: DecksTableProps) => {
  return (
    <Tables.Table>
      <Tables.TableHead>
        <Tables.TableRow>
          <HeadCellWithArrow arrowDirection={false} title={'Name'} />
          <HeadCellWithArrow arrowDirection={false} title={'Cards'} />
          <HeadCellWithArrow arrowDirection={false} title={'Last Updated'} />
          <HeadCellWithArrow arrowDirection={false} title={'Created by'} />
          <Tables.TableHeadCell className={s.noHover}></Tables.TableHeadCell>
        </Tables.TableRow>
      </Tables.TableHead>

      <Tables.TableBody>
        {decks?.map(deck => {
          return (
            <Tables.TableRow key={deck.id}>
              <Tables.TableBodyCell>
                <ImgBlock
                  as={'a'}
                  href={'#'}
                  title={deck.name}
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
                  showEditButtons={userId}
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
