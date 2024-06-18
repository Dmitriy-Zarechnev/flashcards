import type { Meta, StoryObj } from '@storybook/react'

import { RouterDecorator } from '@/shared/utils/RouterDecorator'

import { ModalFooter } from './'

const meta = {
  argTypes: {},
  component: ModalFooter,
  decorators: [RouterDecorator],
  tags: ['autodocs'],
  title: '🟢UI/Assembled/ModalFooter',
} satisfies Meta<typeof ModalFooter>

export default meta
type Story = StoryObj<typeof meta>

export const ModalFooterStory: Story = {
  args: {
    buttonChildren: 'Sing Up',
    footerText: "Don't have an account?",
    linkPath: '/sign-up',
  },
}
