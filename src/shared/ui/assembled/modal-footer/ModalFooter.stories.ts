import type { Meta, StoryObj } from '@storybook/react'

import { ModalFooter } from './index'

const meta = {
  argTypes: {},
  component: ModalFooter,
  tags: ['autodocs'],
  title: '🟢UI/Default/ModalFooter',
} satisfies Meta<typeof ModalFooter>

export default meta
type Story = StoryObj<typeof meta>

export const ModalFooterStory: Story = {
  args: {
    buttonChildren: 'Sing Up',
    footerText: "Don't have an account?",
  },
}
