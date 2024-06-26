import type { Meta, StoryObj } from '@storybook/react'

import { StorybookDecorator } from '@/services/StorybookDecorator'

import { ModalFooter } from './ModalFooter'

const meta = {
  argTypes: {},
  component: ModalFooter,

  decorators: [StorybookDecorator],
  tags: ['autodocs'],
  title: '🟡Entities/auth/components/ModalFooter',
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
