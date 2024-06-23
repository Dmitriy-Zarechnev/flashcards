import type { Meta, StoryObj } from '@storybook/react'

import { BrowserDecorator } from '@/services'

import { ModalFooter } from './'

const meta = {
  argTypes: {},
  component: ModalFooter,

  decorators: [BrowserDecorator],
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
