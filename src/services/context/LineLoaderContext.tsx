import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react'

//========================================================================================
// [ СОЗДАНИЕ КОНТЕКСТА ]

// Определение типа для состояния и функции обновления
type LineLoadingContextType = {
  isLineLoading: boolean
  setLineLoading: Dispatch<SetStateAction<boolean>>
}

// Создание контекста с начальными значениями типа LoadingContextType
const LineLoadingContext = createContext<LineLoadingContextType>({
  isLineLoading: false,
  setLineLoading: () => {},
})

// Хук для удобного использования контекста
export const useLineLoading = () => useContext(LineLoadingContext)

//========================================================================================
// [ ПРОВАЙДЕР КОНТЕКСТА ]

type LineLoadingProviderProps = {
  children: ReactNode
}

// Компонент-провайдер для предоставления контекста
export const LineLoadingProvider = ({ children }: LineLoadingProviderProps) => {
  const [isLineLoading, setLineLoading] = useState<boolean>(false)

  return (
    <LineLoadingContext.Provider value={{ isLineLoading, setLineLoading }}>
      {children}
    </LineLoadingContext.Provider>
  )
}
