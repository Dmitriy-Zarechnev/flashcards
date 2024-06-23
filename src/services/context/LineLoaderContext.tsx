import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react'

//========================================================================================
/*

🟡🟡🟡 просто пример создания контекста, нигде не используется 🟡🟡🟡

1. обернуть приложение - внутри будут потребители контекста

export function App() {
  return (
    <Provider store={store}>
      <LineLoadingProvider>
        <Router />
      </LineLoadingProvider>
    </Provider>
  )
}

2. использование внутри компоненты

const { isLineLoading, setLineLoading } = useLineLoading()

*/
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

// Хук для удобного использования контекста - экспортируется при использовании
export const useLineLoading = () => useContext(LineLoadingContext)

//========================================================================================
// [ ПРОВАЙДЕР КОНТЕКСТА ]

type LineLoadingProviderProps = {
  children: ReactNode
}

// Компонент-провайдер для предоставления контекста - экспортируется при использовании
export const LineLoadingProvider = ({ children }: LineLoadingProviderProps) => {
  const [isLineLoading, setLineLoading] = useState<boolean>(false)

  return (
    <LineLoadingContext.Provider value={{ isLineLoading, setLineLoading }}>
      {children}
    </LineLoadingContext.Provider>
  )
}
