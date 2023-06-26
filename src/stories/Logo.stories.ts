import { Meta, StoryObj } from '@storybook/react'
import { Logo } from '../components/Logo'
import { LogoType } from '../components/Logo/logoType'

export default {
  title: 'Logo/Logo',
  component: Logo,
  tags: ['autodocs'],
  args: {
    color: '1',
    variation: 'text',
    width: 200,
  },
} as Meta<LogoType>

export const Default: StoryObj<LogoType> = {
  args: {},
}
