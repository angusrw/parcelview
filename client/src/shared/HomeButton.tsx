import * as React from 'react'
import { colors } from '../theme'
import { LinkButton } from './LinkButton'

export const HomeButton = () =>
  <LinkButton children={'Home'} to={'/view'} color={colors.greyLight} hcolor={colors.green}/>