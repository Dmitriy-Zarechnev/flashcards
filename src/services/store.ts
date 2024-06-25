import { rtkQueryErrorLogger } from '@/services/AppErrorHandler'
import { flashcardsApi } from '@/services/api/flashcards.api'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(flashcardsApi.middleware, rtkQueryErrorLogger),
  reducer: {
    [flashcardsApi.reducerPath]: flashcardsApi.reducer,
  },
})

// export type AppDispatch = typeof store.dispatch
// export type RootState = ReturnType<typeof store.getState>
