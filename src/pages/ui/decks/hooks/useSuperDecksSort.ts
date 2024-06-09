import { useState } from 'react'

export const useSuperDecksSort = () => {
  const [tableSort, setTableSort] = useState('updated-desc')

  const sortTableOnClickHandler = (title: string) => {
    if (`${title}-asc` !== tableSort) {
      setTableSort(`${title}-asc`)
    } else {
      setTableSort(`${title}-desc`)
    }
  }

  return { setTableSort, sortTableOnClickHandler, tableSort }
}