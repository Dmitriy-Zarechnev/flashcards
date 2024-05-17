import { useState } from 'react'

import { AnswerQuestionModal } from '@/components/ui/answerQuestionModal'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'

import s from './UnknownModal.module.scss'

export const UnknownModal = () => {
  const [checked, setChecked] = useState(false)

  function fooCheck() {
    setChecked(!checked)
  }

  return (
    <Card as={'form'}>
      <AnswerQuestionModal title={'Question'} />
      <AnswerQuestionModal title={'Answer'} />
      <Input className={s.Input} labelTitle={'Input'} placeholder={'Test'} />
      <Checkbox checked={checked} id={'checkbox'} onChange={fooCheck}>
        <Typography.Body2>Checkbox-label</Typography.Body2>
      </Checkbox>
    </Card>
  )
}
