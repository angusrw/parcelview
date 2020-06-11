import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ViewPage } from './screens/ViewPage'
import { FourOhFour } from './screens/FourOhFour'
import { HomePage } from './screens/HomePage'
import { AddItem } from './screens/AddItem'
import { CollectItems } from './screens/CollectItems'

export const routes: React.ReactNode =
  <Switch>
    <Route path="/" exact={true} component={HomePage}/>
    <Route path="/add" component={AddItem}/>
    <Route path="/view" component={ViewPage}/>
    <Route path="/collect" component={CollectItems}/>
    <Route component={FourOhFour}/>
  </Switch>
