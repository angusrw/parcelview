import * as React from 'react'
import { FlatButton } from 'material-ui'
import { navigate } from '../navigate'
import { colors } from '../theme'
import { logout } from '../api'

function handleClick() {
  navigate.push('/')
  logout()
}

export const LogoutButton = () =>
  <FlatButton
    label={'logout'}
    onClick={() => handleClick()}
    backgroundColor={colors.greyLight}
    hoverColor={colors.paleblue}
  />