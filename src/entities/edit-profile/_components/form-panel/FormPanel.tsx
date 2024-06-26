import { useForm } from 'react-hook-form'

import { Button } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './FormPanel.module.scss'

import { TextField } from '../../../_components'
import { EditProfileFormValues, authSchemes } from '../../../validationSchemes'

type FormPanelProps = {
  name?: string
  onSubmit: (data: EditProfileFormValues) => void
}

export const FormPanel = ({ name, onSubmit }: FormPanelProps) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<EditProfileFormValues>({
    defaultValues: { name },
    mode: 'onBlur',
    resolver: zodResolver(authSchemes.editProfile),
  })

  return (
    <form className={s.formPanel} noValidate onSubmit={handleSubmit(onSubmit)}>
      <TextField control={control} label={'NickName'} name={'name'} />
      <Button disabled={isSubmitting} fullWidth type={'submit'} variant={'primary'}>
        Save Changes
      </Button>
    </form>
  )
}
