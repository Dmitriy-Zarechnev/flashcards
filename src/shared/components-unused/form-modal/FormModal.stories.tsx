import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { FormModal } from './FormModal'

const meta = {
  argTypes: {},
  component: FormModal,
  tags: ['autodocs'],
  title: '🟢UI/unused/FormModal',
} satisfies Meta<typeof FormModal>

export default meta
type Story = StoryObj<typeof FormModal>

const Wrapper = () => {
  const options = [
    { label: 'one', value: 1 },
    { label: 'two', value: 2 },
    { label: 'three', value: 3 },
    { label: 'four', value: 4 },
    { label: 'five', value: 5 },
  ]
  const [currentValue, setCurrentValue] = useState<number | string>(1)

  const [checked, setChecked] = useState(false)

  function fooCheck() {
    setChecked(!checked)
  }

  function fooSelect(value: number | string) {
    setCurrentValue(value)
  }

  const IconButtonClickHandler = () => {}

  return (
    <FormModal
      checkBoxChangeFunction={fooCheck}
      checkboxLabel={'CheckBox-Label'}
      checkboxValue={checked}
      firstInputTitle={'Input'}
      headerOnClick={IconButtonClickHandler}
      headerTitle={'Title'}
      leftButtonTitle={'Secondary Button'}
      rightButtonTitle={'Primary Button'}
      secondInputTitle={'Input'}
      selectChangeFunction={fooSelect}
      selectCurrentValue={currentValue}
      selectOptions={options}
      selectTitle={'Select'}
    />
  )
}

export const FormModalStory: Story = {
  render: () => <Wrapper />,
}
