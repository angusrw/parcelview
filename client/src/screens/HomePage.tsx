import * as React from 'react'
import { Screen } from '../shared/Screen'
import LoginComponent from '../shared/LoginComponent'
import { PVheader } from '../shared/PVheader'

export const HomePage = () =>
  <Screen>
    <PVheader/>
    <LoginComponent/>
  </Screen>
