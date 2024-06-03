import type { Meta } from '@storybook/react'

import { Dialog } from './'

const meta = {
  component: Dialog,
  tags: ['autodocs'],
  title: '🟢UI/Default/Dialog',
} satisfies Meta<typeof Dialog>

export default meta

const Wrapper = () => {
  return (
    <Dialog title={'Dialog Title'} trigger={<button>OPEN BUTTON</button>}>
      <div>PUT FORM HERE</div>
    </Dialog>
  )
}

export const Default = {
  render: () => <Wrapper />,
}
