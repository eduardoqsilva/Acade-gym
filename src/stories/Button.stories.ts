import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/Button'
import { ButtonType } from '../components/Button/buttonType'
import { DivWrapper } from '../../.storybook/decorators'

export default {
  title: 'Button/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    text: 'Button',
  },
  argTypes: {
    click: { action: 'click' },
  },
  decorators: [DivWrapper],
} as Meta<ButtonType>

export const Primary: StoryObj<ButtonType> = {
  args: {
    variation: 'primary',
  },
}

export const Secundary: StoryObj<ButtonType> = {
  args: {
    variation: 'secundary',
  },
}
