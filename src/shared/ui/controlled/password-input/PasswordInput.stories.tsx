import type { Meta, StoryObj } from '@storybook/react'

import { useForm } from 'react-hook-form'

import { schema } from '@/entities/auth/ui/validationSchemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { PasswordInput } from './index'

const meta = {
  argTypes: {},
  component: PasswordInput,
  tags: ['autodocs'],
  title: '🟢UI/Default/PasswordInput',
} satisfies Meta<typeof PasswordInput>

export default meta
type Story = StoryObj<typeof PasswordInput>

const validationSchema = schema.createNewPassword

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
