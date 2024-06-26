import type { Meta, StoryObj } from '@storybook/react'

import { StorybookDecorator } from "@/services/StorybookDecorator";

import { CheckEmailPage } from "./CheckEmail.page"

const meta = {
  argTypes: {},
  component: CheckEmailPage,
  decorators: [StorybookDecorator],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🟣Pages/public/CheckEmail',
} satisfies Meta<typeof CheckEmailPage>

export default meta
type Story = StoryObj<typeof meta>

export const CheckEmailPageStory: Story = {
  args: {},
}
