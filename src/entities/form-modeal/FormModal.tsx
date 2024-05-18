import { useState } from 'react'

import { IconButton } from '@/entities/tables/icon-buttons'
import { Button, Card, Checkbox, Input, Select, Typography } from '@/shared'

import s from './FormModal.module.scss'

const options = [
  { label: 'one', value: 1 },
  { label: 'two', value: 2 },
  { label: 'three', value: 3 },
  { label: 'four', value: 4 },
  { label: 'five', value: 5 },
]

export const FormModal = () => {
  const [currentValue, setCurrentValue] = useState<number | string>(1)

  const [checked, setChecked] = useState(false)

  function fooCheck() {
    setChecked(!checked)
  }

  function fooSelect(value: number | string) {
    setCurrentValue(value)
  }

  const IconButtonClickHandler = () => {
    console.log('IconButtonClickHandler')
  }

  return (
    <div className={s.FormWrapper}>
      <div className={s.FormHeader}>
        <Typography.H3>Title</Typography.H3>
        <IconButton
          height={'24px'}
          iconId={'closeOutline'}
          onClick={IconButtonClickHandler}
          width={'24px'}
        />
      </div>

      <Card as={'form'}>
        <div className={s.FormMiddle}>
          <Select
            currentValue={currentValue}
            onChange={fooSelect}
            options={options}
            selectTitle={'Select'}
          />
          <Input labelTitle={'Input'} placeholder={'False'} />
          <Input labelTitle={'Input'} placeholder={'False'} />
          <Checkbox checked={checked} id={'checkbox'} onChange={fooCheck}>
            <Typography.Body2>Checkbox-label</Typography.Body2>
          </Checkbox>
        </div>
        <div className={s.FormFooter}>
          <Button variant={'secondary'}>Button Secondary</Button>
          <Button variant={'primary'}>Button Primary</Button>
        </div>
      </Card>
    </div>
  )
}
