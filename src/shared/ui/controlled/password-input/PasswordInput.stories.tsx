import type { Meta, StoryObj } from '@storybook/react'

import { useForm } from 'react-hook-form'

import { authSchemes } from '@/entities/validationSchemes'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { PasswordInput } from './index'

const meta = {
  argTypes: {},
  component: PasswordInput,
  tags: ['autodocs'],
  title: '🟢UI/Controlled/PasswordInput',
} satisfies Meta<typeof PasswordInput>

export default meta
type Story = StoryObj<typeof PasswordInput>

const validationSchema = authSchemes.createNewPassword

type FormValues = z.infer<typeof validationSchema>

const Wrapper = () => {
  const { control } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
  })

  return <PasswordInput control={control} label={'Password'} name={'password'} />
}

export const DefaultPasswordInput: Story = {
  render: () => <Wrapper />,
}
