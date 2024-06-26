import { useState } from 'react'

import { Card, Checkbox, Input, Typography } from '@/shared'

import s from './ModalList.module.scss'

import { Modal } from './modal/Modal'

export const ModalList = () => {
  const [checked, setChecked] = useState(false)

  function fooCheck() {
    setChecked(!checked)
  }

  return (
    <Card as={'form'}>
      <Modal buttonTitle={'Button Title'} title={'Question'} />
      <Modal buttonTitle={'Button Title'} title={'Answer'} />
      <Input className={s.Input} label={'Input'} placeholder={'Test'} />
      <Checkbox checked={checked} id={'checkbox'} onChange={fooCheck}>
        <Typography.Body2>Checkbox-label</Typography.Body2>
      </Checkbox>
    </Card>
  )
}
