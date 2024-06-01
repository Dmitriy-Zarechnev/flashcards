import { useForm } from 'react-hook-form'

import { useCreateDeckMutation } from '@/services/decks/decks.service'
import { Button, ControlledCheckbox, TextField } from '@/shared'

type FormValues = {
  isPrivate: boolean
  name: string
}

export const CreateDeckPage = () => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      isPrivate: false,
      name: '',
    },
  })

  // хук представляет заранее готовый массив данных - кортеж
  // 1. createDeck - сам запрос
  const [createDeck] = useCreateDeckMutation()

  function onSubmit(data: FormValues) {
    createDeck({
      isPrivate: data.isPrivate,
      name: data.name,
    })
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <TextField control={control} label={'Name'} name={'name'} />
      <ControlledCheckbox control={control} name={'isPrivate'}>
        isPrivate?
      </ControlledCheckbox>
      <Button disabled={isSubmitting} fullWidth={false} type={'submit'} variant={'primary'}>
        Sing In
      </Button>
    </form>
  )
}
