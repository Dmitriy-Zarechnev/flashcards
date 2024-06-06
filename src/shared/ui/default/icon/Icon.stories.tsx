import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from './'
import { ids } from './svgIdGetter'

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: '🟢UI/Default/Icon',
}

export default meta
type Story = StoryObj<typeof meta>

export const AllSvgIcons: StoryObj<typeof meta> = {
  render: () => (
    <ul style={{ display: 'flex', flexDirection: 'column', rowGap: '30px' }}>
      {ids.map(id => (
        <li key={id} style={{ alignItems: 'center', columnGap: '50px', display: 'flex' }}>
          <Icon iconId={id} key={id} />
          {id}
        </li>
      ))}
    </ul>
  ),
}

export const Primary: Story = {
  args: {
    height: '16',
    iconId: ids[0],
    viewBox: '0 0 24 24',
    width: '16',
  },
}
