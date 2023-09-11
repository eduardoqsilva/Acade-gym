import 'styled-components'
import { DefaultTheme as theme } from '../styles/theme/defaultTheme'

type ThemeType = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
