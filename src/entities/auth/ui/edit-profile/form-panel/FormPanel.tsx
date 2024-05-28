import { FieldValues, useForm } from 'react-hook-form'

import { schema } from '@/entities/auth/ui/validationSchemas'
import { Button, TextField } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './FormPanel.module.scss'

type FormPanelProps = {
  name: string
  onSubmit: (data: FieldValues) => void
}

const validationSchema = schema.editProfileFormPanel

type FormValues = z.infer<typeof validationSchema>

export const FormPanel = ({ name, onSubmit }: FormPanelProps) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: { name },
    mode: 'onBlur',
    resolver: zodResolver(validationSchema),
  })

  return (
    <form className={s.formPanel} noValidate onSubmit={handleSubmit(onSubmit)}>
      <TextField control={control} label={'NickName'} name={'name'} />
      <Button disabled={isSubmitting} fullWidth type={'submit'} variant={'primary'}>
        Sing Up
      </Button>
    </form>
  )
}
