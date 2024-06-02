import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { modalSchemes } from '@/entities/validationSchemes'
import { Button, ControlledCheckbox, TextField } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type DecksModalFormProps = {
  btnTitle: string
  closeModal?: () => void
  onSubmit: (data: FormValues) => Promise<any>
}

const validationSchema = modalSchemes.deck

type FormValues = z.infer<typeof validationSchema>

export const DecksModalForm = ({ btnTitle, closeModal, onSubmit }: DecksModalFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: '',
      picture: '',
      private: false,
    },
    resolver: zodResolver(validationSchema),
  })

  async function submitHandler(data: FormValues) {
    setIsSubmitting(true)
    try {
      const res = await onSubmit(data)

      console.log(res)
      closeModal?.()
    } catch (error) {
      setIsSubmitting(false)
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit(submitHandler)}>
      <TextField control={control} label={'Name Pack'} name={'name'} type={'text'} />
      <ControlledCheckbox control={control} name={'private'}>
        Private Deck
      </ControlledCheckbox>
      <Button onClick={closeModal} type={'button'} variant={'secondary'}>
        Cancel
      </Button>
      <Button disabled={isSubmitting} type={'submit'} variant={'primary'}>
        {btnTitle}
      </Button>
    </form>
  )
}
