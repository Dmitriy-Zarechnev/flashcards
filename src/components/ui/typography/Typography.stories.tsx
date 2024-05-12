import type { Meta, StoryObj } from '@storybook/react'

import { ReactNode } from 'react'

import { Typography } from './Typography'

/*
# так как компонента отрисовыывается через cb-function, для отрисовки в storybook используется
 WrapperComponent - пустая компонента для отрисовки разных вариантов компоненты Typography
*/
function WrapperComponent({ children }: { children: ReactNode }) {
  return <>{children}</>
}

const meta: Meta<typeof WrapperComponent> = {
  component: WrapperComponent,
  title: 'Components/Typography',
}

export default meta

const loremText = 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH'

export const All: StoryObj<typeof meta> = {
  render: () => (
    <WrapperComponent>
      <Typography.H1>{loremText}</Typography.H1>
      <Typography.H2>{loremText}</Typography.H2>
      <Typography.H3>{loremText}</Typography.H3>
      <Typography.H4>{loremText}</Typography.H4>
      <Typography.Body1>{loremText}</Typography.Body1>
      <Typography.Subtitle1>{loremText}</Typography.Subtitle1>
      <Typography.Body2>{loremText}</Typography.Body2>
      <Typography.Subtitle2>{loremText}</Typography.Subtitle2>
      <Typography.Caption>{loremText}</Typography.Caption>
      <Typography.Overline>{loremText}</Typography.Overline>
      <div>
        <Typography.Link1>{loremText}</Typography.Link1>
      </div>
      <div>
        <Typography.Link1>{loremText}</Typography.Link1>
      </div>
    </WrapperComponent>
  ),
}
