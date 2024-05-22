import { Button, Card, Checkbox, IconButton, Input, Select, Typography } from '@/shared'

import s from './FormModal.module.scss'

type FormModalProps = {
  checkBoxChangeFunction: () => void
  checkboxLabel: string
  checkboxValue: boolean
  firstInputTitle: string
  headerOnClick: () => void
  headerTitle: string
  leftButtonTitle: string
  rightButtonTitle: string
  secondInputTitle: string
  selectChangeFunction: (value: number | string) => void
  selectCurrentValue: number | string
  selectOptions: Array<{ label: string; value: number }>
  selectTitle: string
}

export const FormModal = ({
  checkBoxChangeFunction,
  checkboxLabel,
  checkboxValue,
  firstInputTitle,
  headerOnClick,
  headerTitle,
  leftButtonTitle,
  rightButtonTitle,
  secondInputTitle,
  selectChangeFunction,
  selectCurrentValue,
  selectOptions,
  selectTitle,
}: FormModalProps) => {
  return (
    <div className={s.FormWrapper}>
      <div className={s.FormHeader}>
        <Typography.H3>{headerTitle}</Typography.H3>
        <IconButton
          height={'24px'}
          iconId={'closeOutline'}
          onClick={headerOnClick}
          width={'24px'}
        />
      </div>

      <Card as={'form'}>
        <div className={s.FormMiddle}>
          <Select
            currentValue={selectCurrentValue}
            onChange={selectChangeFunction}
            options={selectOptions}
            selectTitle={`${selectTitle}`}
          />
          <Input label={`${firstInputTitle}`} placeholder={`Write ${firstInputTitle}`} />
          <Input label={`${secondInputTitle}`} placeholder={`Write ${secondInputTitle}`} />
          <Checkbox checked={checkboxValue} id={'checkbox'} onChange={checkBoxChangeFunction}>
            <Typography.Body2>{checkboxLabel}</Typography.Body2>
          </Checkbox>
        </div>
        <div className={s.FormFooter}>
          <Button variant={'secondary'}>{leftButtonTitle}</Button>
          <Button variant={'primary'}>{rightButtonTitle}</Button>
        </div>
      </Card>
    </div>
  )
}
