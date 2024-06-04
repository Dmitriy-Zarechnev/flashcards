import { ChangeEvent } from 'react'

import { Button, Icon, SearchInput, SliderComponent, Tabs, Typography } from '@/shared'

import s from './DeckControlBlock.module.scss'

const tabsData = [
  { title: 'My Cards', value: 'My Cards' },
  { title: 'All Cards', value: 'All Cards' },
]

type DeckControlBlockProps = {
  clearFilterOnClick: () => void
  searchInputOnChange: (value: string) => void
  searchInputReset: () => void
  searchInputValue: string
  sliderValue: number[]
  sliderValueChange: (value: number[]) => void
  tabValue: string
  tabValueChange: (value: string) => void
}

export const DeckControlBlock = ({
  clearFilterOnClick,
  searchInputOnChange,
  searchInputReset,
  searchInputValue,
  sliderValue,
  sliderValueChange,
  tabValue,
  tabValueChange,
}: DeckControlBlockProps) => {
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
        <Tabs.Root
          defaultValue={tabsData[1].value}
          onClick={tabClickHandler}
          onValueChange={tabValueChange}
          tabs={tabsData}
          value={tabValue}
        />
      </div>
      <div className={s.sliderBox}>
        <Typography.Body2>Number of cards</Typography.Body2>
        <SliderComponent
          valueChange={sliderValueChange}
          valueLeft={sliderValue[0]}
          valueRight={sliderValue[1]}
        />
      </div>
      <Button onClick={clearFilterOnClick} variant={'secondary'}>
        <Icon iconId={'trashOutline'} />
        Clear Filter
      </Button>
    </div>
  )
}
