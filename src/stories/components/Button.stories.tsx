import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../components/Button'
import { ButtonType } from '../../components/Button/buttonType'
import { DivWrapperButton } from '../../../.storybook/decorators'

export default {
  title: 'Global-components/Button/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    text: 'Button',
  },
  argTypes: {
    click: { action: 'click' },
  },
  decorators: [DivWrapperButton],
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
