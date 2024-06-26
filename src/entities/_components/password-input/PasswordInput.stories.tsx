import type { Meta, StoryObj } from '@storybook/react'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { authSchemes } from '../../validationSchemes'
import { PasswordInput } from './PasswordInput'

const meta = {
  argTypes: {},
  component: PasswordInput,
  tags: ['autodocs'],
  title: '🟡Entities/components/PasswordInput',
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
