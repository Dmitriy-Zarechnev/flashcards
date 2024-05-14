import type { Meta, StoryObj } from '@storybook/react'

import { SelectComp } from '@/components/ui/select'

const meta = {
  argTypes: {},
  component: SelectComp,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof SelectComp>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSelect: Story = {}

export const DisabledSelect: Story = {
  args: {
    disabled: true,
  },
}
