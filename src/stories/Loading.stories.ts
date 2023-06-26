import { Meta, StoryObj } from '@storybook/react'
import { Loading } from '../components/Loading'
import { LoadingType } from '../components/Loading/loadingType'

export default {
  title: 'Loading/Loading',
  component: Loading,
  args: {
    load: true,
  },
} as Meta<LoadingType>

export const Default: StoryObj<LoadingType> = {
  args: {
    load: true,
  },
}
