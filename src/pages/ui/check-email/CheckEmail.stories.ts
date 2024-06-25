import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmailPage } from './CheckEmail.page'

const meta = {
  argTypes: {},
  component: CheckEmailPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🟡Auth/CheckEmail',
} satisfies Meta<typeof CheckEmailPage>

export default meta
type Story = StoryObj<typeof meta>

export const CheckEmailPageStory: Story = {
  args: {},
}
