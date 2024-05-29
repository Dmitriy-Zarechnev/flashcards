import { useGetDecksQuery } from '@/services/flashcards-api'

export const DecksPage = () => {
  const { data, error, isLoading } = useGetDecksQuery()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Cards</th>
          <th>Last Updated</th>
          <th>Created By</th>
        </tr>
      </thead>
      <tbody>
        {data?.items.map(deck => {
          const updatedAt = new Date(deck.updated).toLocaleString('ru-RU')

          return (
            <tr key={deck.id}>
              <td>{deck.name}</td>
              <td>{deck.cardsCount}</td>
              <td>{updatedAt}</td>
              <td>{deck.author.name}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
