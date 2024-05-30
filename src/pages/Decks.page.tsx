import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useGetDecksQuery } from '@/services/flashcards-api'
import { Input } from '@/shared'

export const DecksPage = () => {
  const [search, setSearch] = useState('')

  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search')

  const { data, error, isLoading } = useGetDecksQuery({ name: search })
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <Input onChange={e => setSearch(e.target.value)} value={search} />
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
    </div>
  )
}
