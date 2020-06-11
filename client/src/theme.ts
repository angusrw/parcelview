import { getMuiTheme } from 'material-ui/styles'

export const colors = {
  blueDark: '#1C2B39',
  green: '#79BD39',
  greyLight: '#EBEBED',
  grey: '#343F48',
  red: '#d81e5b',
  yellow: '#ffb400',
  paleblue: '#4bbaff',

}

export const fontSize = {
  regular: 14,
}

export const spacing = {
  narrow: 10,
  medium: 14,
  wide: 22,
}

export const materialUiTheme = getMuiTheme({
  palette: {
    primary1Color: colors.green,
  }
})