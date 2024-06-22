import type { Meta, StoryObj } from '@storybook/react'

import { InitLoader } from './InitLoader'

const meta = {
  argTypes: {
    variant: {},
  },
  component: InitLoader,
  // parameters: {
  //   layout: 'centered',
  // },
  tags: ['autodocs'],
  title: '🟤Router/InitLoader',
} satisfies Meta<typeof InitLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
