import type { Meta, StoryObj } from '@storybook/react'

import pictureDefaultCover from './../../../../shared/assets/card-default-cover.webp'
import { PictureInput } from './PictureInput'

const meta = {
  argTypes: {},
  component: PictureInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: '🔴Modal/UI/picture-input',
} satisfies Meta<typeof PictureInput>

export default meta
type Story = StoryObj<typeof PictureInput>

//========================================================================================

function deleteImageHandlerCb() {
  console.log('DELETED')
}

function handleImageChangeCb(file: File) {
  console.log('imageChanged')
  console.log(file)
}

export const Default: Story = {
  args: {
    btnDisable: false,
    coverFromServer: undefined,
    deleteImageHandlerCb,
    handleImageChangeCb,
    pictureDefaultCover,
  },
}

export const ButtonsDisabled: Story = {
  args: {
    btnDisable: true,
    coverFromServer: undefined,
    deleteImageHandlerCb,
    handleImageChangeCb,
    pictureDefaultCover,
  },
}
