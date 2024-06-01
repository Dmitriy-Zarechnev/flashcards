import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import {
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} from '@/services/decks/decks.service'
import { Button, ControlledCheckbox, IconButton, Input, Pagination, TextField } from '@/shared'

//========================================================================================

type FormValues = {
  isPrivate: boolean
  name: string
}

export const DecksPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search') ?? ''
  const currentPage = searchParams.get('currentPage') ?? '1'
  const optionsItemsPerPage = [10, 20, 30]
  const itemsPerPage = searchParams.get('itemsPerPage') ?? `${optionsItemsPerPage[0]}`

  function handleSearch(value: string) {
    if (value.length) {
      searchParams.set('search', value)
    } else {
      searchParams.delete('search')
    }
    setSearchParams(searchParams)
  }

  function handleCurrentPage(value: number) {
    if (value) {
      searchParams.set('currentPage', value.toString())
    } else {
      searchParams.delete('currentPage')
    }
    setSearchParams(searchParams)
  }

  function handlePerPage(value: number) {
    if (value) {
      searchParams.set('itemsPerPage', value.toString())
    } else {
      searchParams.delete('itemsPerPage')
    }
    setSearchParams(searchParams)
  }

  const { data, error, isLoading } = useGetDecksQuery({
    currentPage: +currentPage,
    itemsPerPage: +itemsPerPage,
    name: search,
  })
  const [updateDeck] = useUpdateDeckMutation()

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      isPrivate: false,
      name: '',
    },
  })

  const [showEdit, setShowEdit] = useState(false)
  const [editDeckId, setEditDeckId] = useState('')

  function handleUpdateDeck(id: string) {
    setShowEdit(true)
    setEditDeckId(id)
  }

  function onSubmit(data: FormValues) {
    updateDeck({ id: editDeckId, isPrivate: data.isPrivate, name: data.name })
    setShowEdit(false)
  }

  const [deleteDeck] = useDeleteDeckMutation()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <Input onChange={e => handleSearch(e.target.value)} value={search} />
      <Pagination
        count={data?.pagination.totalPages || 0}
        onChange={handleCurrentPage}
        onPerPageChange={handlePerPage}
        page={+currentPage}
        perPage={+itemsPerPage}
        perPageOptions={optionsItemsPerPage}
      />
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
                <td>
                  <IconButton iconId={'editOutline'} onClick={() => handleUpdateDeck(deck.id)} />
                  <IconButton iconId={'closeOutline'} onClick={() => deleteDeck({ id: deck.id })} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {showEdit && (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField control={control} label={'Name'} name={'name'} />
          <ControlledCheckbox control={control} name={'isPrivate'}>
            isPrivate?
          </ControlledCheckbox>
          <Button fullWidth={false} type={'submit'} variant={'primary'}>
            Sing In
          </Button>
        </form>
      )}
    </div>
  )
}
