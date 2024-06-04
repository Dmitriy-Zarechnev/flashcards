import { ChangeEvent, useState } from 'react'

import { Button, Icon, SearchInput, SliderComponent, Tabs, Typography } from '@/shared'

import s from './DeckControlBlock.module.scss'

const tabsData = [
  { title: 'My Cards', value: 'My Cards' },
  { title: 'All Cards', value: 'All Cards' },
]

type DeckControlBlockProps = {
  searchInputOnChange: (value: string) => void
  searchInputReset: () => void
  searchInputValue: string
}

export const DeckControlBlock = ({
  searchInputOnChange,
  searchInputReset,
  searchInputValue,
}: DeckControlBlockProps) => {
  const [valueLeft, setValueLeft] = useState(25)
  const [valueRight, setValueRight] = useState(75)

  const valueChangeHandler = (value: number[]) => {
    setValueLeft(value[0])
    setValueRight(value[1])
  }

  const tabClickHandler = () => {
    console.log('click')
  }

  // ----- Функция работы с поиском по названию deck -----
  const searchInputOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    searchInputOnChange(e.currentTarget.value)
  }

  return (
    <div className={s.blockWrapper}>
      <SearchInput
        className={s.searchInput}
        onChange={searchInputOnChangeHandler}
        placeholder={'Find your fate'}
        searchTextResetHandler={searchInputReset}
        value={searchInputValue}
      />
      <div className={s.tabsBox}>
        <Typography.Body2>Show decks cards</Typography.Body2>
        <Tabs.Root defaultValue={tabsData[1].value} onClick={tabClickHandler} tabs={tabsData} />
      </div>
      <div className={s.sliderBox}>
        <Typography.Body2>Number of cards</Typography.Body2>
        <SliderComponent
          valueChangeHandler={valueChangeHandler}
          valueLeft={valueLeft}
          valueRight={valueRight}
        />
      </div>
      <Button variant={'secondary'}>
        <Icon iconId={'trashOutline'} />
        Clear Filter
      </Button>
    </div>
  )
}
