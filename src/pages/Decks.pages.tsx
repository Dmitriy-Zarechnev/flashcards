import { useGetDecksQuery } from '@/services/flashcards-api'

export const DecksPages = () => {
  const result = useGetDecksQuery()

  console.log(result)

  return <div>PAGES</div>
}
