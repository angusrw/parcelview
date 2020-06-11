import * as React from 'react'
import { Screen } from '../shared/Screen'
import { HomeButton } from '../shared/HomeButton'
import { AddEntry } from '../shared/AddEntry'
import { PVheader } from '../shared/PVheader'

export const AddItem = () =>
  <Screen>
    <PVheader/>
    <p/>
    <HomeButton/>
    <p/>
    <AddEntry/>
  </Screen>