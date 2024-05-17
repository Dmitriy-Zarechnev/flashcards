import type { Meta, StoryObj } from '@storybook/react'

import { HeadCellWithArrow } from './'

const meta = {
  argTypes: {},
  component: HeadCellWithArrow,
  tags: ['autodocs'],
  title: 'Components/HeadCellWithArrow',
} satisfies Meta<typeof HeadCellWithArrow>

export default meta
type Story = StoryObj<typeof meta>

export const HeadCellWithArrowStory: Story = {
  args: {
    title: 'Name 1',
  },
}
