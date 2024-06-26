import { useParams } from 'react-router-dom'

export const useIdFromParams = () => {
  // ----- Достали deck id из url-а -----
  const params = useParams()
  const deckId = params.deckId ?? ''

  return { deckId }
}
