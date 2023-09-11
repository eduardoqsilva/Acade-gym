export interface ButtonType {
  text: string
  type?: 'button' | 'submit' | 'reset'
  variation?: 'primary' | 'secundary'
  radius?: string
  click?: () => void
  disable?: boolean
}
