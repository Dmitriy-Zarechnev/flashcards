import { ChangeEvent } from 'react'

import { GetDeckMinMaxCardsResponse } from '@/services'
import { Button, Icon, SliderComponent, Tabs, Typography } from '@/shared'

import s from './DeckControlBlock.module.scss'

import { SearchInput } from './../../../_components'
import { TabsData } from './../../hooks'

type DeckControlBlockProps = {
  clearFilterOnClick: () => void
  minMaxCardsData: GetDeckMinMaxCardsResponse
  searchInputOnChange: (value: string) => void
  searchInputReset: () => void
  searchInputValue: string
  sliderValueChange: (value: number[]) => void
  sliderValueCommit: (value: number[]) => void
  sliderValues: number[]
  tabValue: string
  tabValueChange: (value: string) => void
  tabsData: TabsData[]
}

export const DeckControlBlock = ({
  clearFilterOnClick,
  minMaxCardsData,
  searchInputOnChange,
  searchInputReset,
  searchInputValue,
  sliderValueChange,
  sliderValueCommit,
  sliderValues,
  tabValue,
  tabValueChange,
  tabsData,
}: DeckControlBlockProps) => {
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
          defaultValue={tabValue}
          onValueChange={tabValueChange}
          tabs={tabsData}
          value={tabValue}
        />
      </div>
      <div className={s.sliderBox}>
        <Typography.Body2>Number of cards</Typography.Body2>
        <SliderComponent
          max={minMaxCardsData.max}
          min={minMaxCardsData.min}
          onValueChange={sliderValueChange}
          onValueCommit={sliderValueCommit}
          value={[sliderValues[0], sliderValues[1]]}
        />
      </div>
      <Button onClick={clearFilterOnClick} variant={'secondary'}>
        <Icon iconId={'trashOutline'} />
        Clear Filter
      </Button>
    </div>
  )
}
