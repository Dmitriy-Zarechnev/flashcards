import { FC } from 'react'

import { Icon } from '@/components/ui/icon'
import { PaginationSelect } from '@/components/ui/pagination/paginationSelect'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './Pagination.module.scss'

// import { KeyboardArrowLeft, KeyboardArrowRight } from '../../'
import { usePagination } from './usePagination'

type PaginationConditionals =
  | {
      onPerPageChange: (itemPerPage: number) => void
      perPage: number
      perPageOptions: number[]
    }
  | {
      onPerPageChange?: never
      perPage?: null
      perPageOptions?: never
    }

export type PaginationProps = {
  count: number
  onChange: (page: number) => void
  onPerPageChange?: (itemPerPage: number) => void
  page: number
  perPage?: number
  perPageOptions?: number[]
  siblings?: number
} & PaginationConditionals

const classNames = {
  container: s.container,
  dots: s.dots,
  icon: s.icon,
  item: s.item,
  pageButton(selected?: boolean) {
    return clsx(this.item, selected && s.selected)
  },
  root: s.root,
  select: s.select,
  selectBox: s.selectBox,
}

export const Pagination: FC<PaginationProps> = ({
  count,
  onChange,
  onPerPageChange,
  page,
  perPage = null,
  perPageOptions,
  siblings,
}) => {
  const {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({
    count,
    onChange,
    page,
    siblings,
  })

  const showPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange

  return (
    <div className={classNames.root}>
      <div className={classNames.container}>
        <PrevButton disabled={isFirstPage} onClick={handlePreviousPageClicked} />

        <MainPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />

        <NextButton disabled={isLastPage} onClick={handleNextPageClicked} />
      </div>

      {showPerPageSelect && (
        <PerPageSelect
          {...{
            onPerPageChange,
            perPage,
            perPageOptions,
          }}
        />
      )}
    </div>
  )
}

type NavigationButtonProps = {
  disabled?: boolean
  onClick: () => void
}

type PageButtonProps = {
  page: number
  selected: boolean
} & NavigationButtonProps

const Dots: FC = () => {
  return <span className={classNames.dots}>&#8230;</span>
}
const PageButton: FC<PageButtonProps> = ({ disabled, onClick, page, selected }) => {
  return (
    <button
      className={classNames.pageButton(selected)}
      disabled={selected || disabled}
      onClick={onClick}
    >
      <Typography.Body2>{page}</Typography.Body2>
    </button>
  )
}

const PrevButton: FC<NavigationButtonProps> = ({ disabled, onClick }) => {
  return (
    <button className={classNames.item} disabled={disabled} onClick={onClick}>
      <Icon height={'16'} iconId={'arrowLeft'} viewBox={'0 0 16 16'} width={'16'} />
    </button>
  )
}

const NextButton: FC<NavigationButtonProps> = ({ disabled, onClick }) => {
  return (
    <button className={classNames.item} disabled={disabled} onClick={onClick}>
      <Icon height={'16'} iconId={'arrowRight'} viewBox={'0 0 16 16'} width={'16'} />
    </button>
  )
}

type MainPaginationButtonsProps = {
  currentPage: number
  onClick: (pageNumber: number) => () => void
  paginationRange: (number | string)[]
}

const MainPaginationButtons: FC<MainPaginationButtonsProps> = ({
  currentPage,
  onClick,
  paginationRange,
}) => {
  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') {
          return <Dots key={index} />
        }

        return <PageButton key={index} onClick={onClick(page)} page={page} selected={isSelected} />
      })}
    </>
  )
}

type PerPageSelectProps = {
  onPerPageChange: (itemPerPage: number) => void
  perPage: number
  perPageOptions: number[]
}

const PerPageSelect: FC<PerPageSelectProps> = ({ onPerPageChange, perPage, perPageOptions }) => {
  const selectOptions = perPageOptions.map(value => ({
    label: value,
    value,
  }))

  function onPerPageChangeForType(value: number | string): void {
    onPerPageChange(value as number)
  }

  return (
    <div className={classNames.selectBox}>
      <Typography.Body2>Показать</Typography.Body2>
      <PaginationSelect
        className={classNames.select}
        currentValue={perPage}
        onChange={onPerPageChangeForType}
        options={selectOptions}
      />
      <Typography.Body2>на странице</Typography.Body2>
    </div>
  )
}
