import { useState } from 'react'

import { Modal } from '@/entities/modal-list/modal'
import { Card, Checkbox, Input, Typography } from '@/shared'

import s from './ModalList.module.scss'

export const ModalList = () => {
  const [checked, setChecked] = useState(false)

  function fooCheck() {
    setChecked(!checked)
  }

  return (
    <Card as={'form'}>
      <Modal buttonTitle={'buttonTitle'} title={'Question'} />
      <Modal buttonTitle={'buttonTitle'} title={'Answer'} />
      <Input className={s.Input} label={'Input'} placeholder={'Test'} />
      <Checkbox checked={checked} id={'checkbox'} onChange={fooCheck}>
        <Typography.Body2>Checkbox-label</Typography.Body2>
      </Checkbox>
    </Card>
  )
}
