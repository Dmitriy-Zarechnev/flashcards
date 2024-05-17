import type { Meta, StoryObj } from '@storybook/react'

import defImg from '../../../assets/defaultPicture.jpg'
import { FullTablesExample, TableData } from './'

const meta = {
  argTypes: {},
  component: FullTablesExample,
  tags: ['autodocs'],
  title: 'Components/FullTablesExample',
} satisfies Meta<typeof FullTablesExample>

const tableData: TableData[] = [
  {
    firstCell: { imgUrl: defImg, text: 'Cell 1' },
    forthCell: 'Cell 4',
    id: 'uniq1',
    rating: 2,
    secondCell: 'Cell 2',
    thirdCell: 'Cell 1',
  },

  {
    firstCell: { imgUrl: defImg, text: 'Cell 1' },
    forthCell: 'Cell 4',
    id: 'uniq2',
    rating: 4,
    secondCell: 'Cell 2',
    thirdCell: 'Cell 1',
  },
]

export default meta
type Story = StoryObj<typeof meta>

export const FullTablesExampleStory: Story = {
  args: {
    tableData,
  },
}
