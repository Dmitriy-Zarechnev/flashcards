import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}
export const PrimaryDisabled: Story = {
  args: {
    children: 'Primary Disabled Button',
    disabled: true,
    variant: 'primary',
  },
}
export const PrimaryFullWidth: Story = {
  args: {
    children: 'Primary Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const PrimaryWithImg: Story = {
  args: {
    children: 'Primary With Img Button',
    disabled: false,
    img: true,
    variant: 'primary',
  },
}
export const PrimaryDisabledWithImg: Story = {
  args: {
    children: 'Primary Disabled With Img Button',
    disabled: true,
    img: true,
    variant: 'primary',
  },
}
export const PrimaryFullWidthWithImg: Story = {
  args: {
    children: 'Primary Full Width With Img Button',
    disabled: false,
    fullWidth: true,
    img: true,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}
export const SecondaryDisabled: Story = {
  args: {
    children: 'Secondary Disabled Button',
    disabled: true,
    variant: 'secondary',
  },
}
export const SecondaryFullWidth: Story = {
  args: {
    children: 'Secondary Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'secondary',
  },
}

export const SecondaryWithImg: Story = {
  args: {
    children: 'Secondary With Img Button',
    disabled: false,
    img: true,
    variant: 'secondary',
  },
}
export const SecondaryDisabledWithImg: Story = {
  args: {
    children: 'Secondary Disabled With Img Button',
    disabled: true,
    img: true,
    variant: 'secondary',
  },
}
export const SecondaryFullWidthWithImg: Story = {
  args: {
    children: 'Secondary Full Width With Img Button',
    disabled: false,
    fullWidth: true,
    img: true,
    variant: 'secondary',
  },
}

export const PrimaryAsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a primary button',
    variant: 'primary',
  },
}
export const SecondaryAsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a secondary button',
    variant: 'secondary',
  },
}
