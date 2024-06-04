import type { Meta, StoryObj } from '@storybook/react'

import { ModalFooter } from './'

const meta = {
  argTypes: {},
  component: ModalFooter,
  tags: ['autodocs'],
  title: '🟢UI/Assembled/ModalFooter',
} satisfies Meta<typeof ModalFooter>

export default meta
type Story = StoryObj<typeof meta>

export const ModalFooterStory: Story = {
  args: {
    buttonChildren: 'Sing Up',
    footerText: "Don't have an account?",
  },
}
