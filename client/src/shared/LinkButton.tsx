import * as React from 'react'
import { FlatButton } from 'material-ui'
import { navigate } from '../navigate'

type Props = { children: string, to: string, color: string, hcolor: string}
export const LinkButton = (props: Props) =>
  <FlatButton
    label={props.children}
    onClick={() => navigate.push(props.to)}
    backgroundColor={props.color}
    hoverColor={props.hcolor}
  />
