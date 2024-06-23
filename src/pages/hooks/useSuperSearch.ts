import { useEffect, useState } from 'react'

export const useSuperSearch = (
  searchParams: URLSearchParams,
  setSearchParams: (newSearchParams: URLSearchParams) => void
) => {
  // Текущее значение поиска из URLSearchParams
  const search = searchParams.get('search') ?? ''
  // Состояние для хранения значения поля ввода
  const [inputValue, setInputValue] = useState(search)

  // Состояние для отправки значения поля ввода после задержки
  const [inputFinalValue, setInputFinalValue] = useState(inputValue)

  // Функция для обработки изменения значения в поле ввода
  const searchInputOnChangeHandler = (value: string) => {
    setInputValue(value)
  }

  // Используем useEffect для реализации debounce
  useEffect(() => {
    // Устанавливаем таймер, который обновит URLSearchParams и inputFinalValue после задержки
    const timerId = setTimeout(() => {
      if (inputValue.length) {
        setInputFinalValue(inputValue)
        searchParams.set('search', inputValue)
      } else {
        setInputFinalValue(inputValue)
        searchParams.delete('search')
      }
      setSearchParams(searchParams)
    }, 500)

    return () => {
      clearTimeout(timerId)
    }
  }, [inputValue, searchParams, setSearchParams])

  // Обработчик сброса поиска
  const searchInputResetHandler = () => {
    setInputValue('')
    setInputFinalValue('')
    searchParams.delete('search')
    setSearchParams(searchParams)
  }

  return {
    inputFinalValue,
    inputValue,
    searchInputOnChangeHandler,
    searchInputResetHandler,
  }
}
