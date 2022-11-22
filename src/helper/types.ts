export interface CustomThemeOption {
  colors: { [key: string]: string }
  heading: string
  paper: string
  backgroundDefault: string
  background: string
  darkTextPrimary: string
  darkTextSecondary: string
  textDark: string
  menuSelected: string
  menuSelectedBack: string
  divider: string
}

export interface ComponentProps {
  is_loading: boolean
}
