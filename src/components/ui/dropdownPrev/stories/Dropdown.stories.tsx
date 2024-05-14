import type { Meta, StoryObj } from '@storybook/react'

import { Dropdown, Item } from '@/components/ui/dropdown'
import { Icon } from '@/components/ui/icon'

import dropdownImage from './Dropdown.webp'

const meta = {
  argTypes: {
    dropdownProfile: {
      description: 'объект для отображения в профиля пользователя',
    },
    items: {
      control: ['object'],
      description: 'массив объектов для отображения в списке',
    },
    trigger: {
      description: 'component для кнопки открытия меню',
    },
    triggerClassName: {
      control: 'text',
      description: ' className для кнопки открытия меню',
    },
  },
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

//========================================================================================

const itemsArray: Item[] = [
  { id: '1', svgCfg: { iconId: 'logOut' }, title: 'Item 1' },
  { id: '2', svgCfg: { iconId: 'searchOutline' }, title: 'Item 2' },
  { id: '3', svgCfg: { iconId: 'closeOutline' }, title: 'Item 3' },
]

export const Primary: Story = {
  args: {
    itemsArray,
    triggerComponent: <Icon iconId={'eyeOutline'} />,
  },
}

//========================================================================================

const dropdownProfile = {
  email: 'SuperIvan@gmail.com',
  person: 'Ivan',
}

export const Secondary: Story = {
  args: {
    dropdownProfile,
    itemsArray,
    triggerComponent: <img alt={'noImg'} src={dropdownImage} />,
  },
}
