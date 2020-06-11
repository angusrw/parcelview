import * as React from 'react'
import { Screen } from '../shared/Screen'
import { HomeButton } from '../shared/HomeButton'
import { DeleteEntry } from '../shared/DeleteEntry'
import { PVheader } from '../shared/PVheader'

export const CollectItems = () =>
  <Screen>
    <PVheader/>
    <p/>
    <HomeButton/>
    <p/>
    <DeleteEntry/>
  </Screen>