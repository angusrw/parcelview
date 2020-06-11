import * as React from 'react'
import { Screen } from '../shared/Screen'
import { LinkButton } from '../shared/LinkButton'
import EntitiesTable from '../shared/EntitiesTable'
import { LogoutButton } from '../shared/LogoutButton'
import { PVheader } from '../shared/PVheader'

export const ViewPage = () =>
  <Screen>
    <PVheader/>
    <p/>
    <h5>By Terrace and Ghyston</h5>
    <p/>
    <LinkButton children={'Add Item'} to={'/add'} color={'#79BD39'} hcolor={'green'}/>
    <p/>
    <LinkButton children={'Collect Items'} to={'/collect'} color={'#1f9fff'} hcolor={'#abe0ff'}/>
    <p/>
    <h1>Current Items:</h1>
    <p/>
    <EntitiesTable/>
    <p/>
    <LogoutButton/>
  </Screen>
