import type { Meta, StoryObj } from '@storybook/react'

import { FormModal } from './'

const meta = {
  argTypes: {},
  component: FormModal,
  tags: ['autodocs'],
  title: 'Components/FormModal',
} satisfies Meta<typeof FormModal>

export default meta
type Story = StoryObj<typeof meta>

export const FormModalStory: Story = {
  args: {},
}
