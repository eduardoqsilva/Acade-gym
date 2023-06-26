import { Meta, StoryObj } from '@storybook/react'
import { DivWrapper } from '../../.storybook/decorators'
import { Input } from '../components/Inputs'
import { TextInputType } from '../components/Inputs/inputsType'

export default {
  title: 'Inputs/Inputs',
  component: Input,
  tags: ['autodocs'],
  args: {
    label: 'Label:',
    msgError: 'error input',
    placeholder: 'Your placeholder here',
    type: 'text',
  },
  decorators: [DivWrapper],
} as Meta<TextInputType>

export const Variation01: StoryObj<TextInputType> = {
  args: {
    variation: '01',
  },
}

export const Variation02: StoryObj<TextInputType> = {
  args: {
    variation: '02',
  },
}
