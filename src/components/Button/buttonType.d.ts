export interface ButtonType {
  text: string
  type?: 'button' | 'submit' | 'reset'
  variation?: 'primary' | 'secundary'
  radius?: number
  click?: () => void
  disable?: boolean
}
