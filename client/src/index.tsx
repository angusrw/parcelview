import { MuiThemeProvider } from 'material-ui/styles'
import { navigate } from './navigate'
import * as React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import { injectGlobal, default as styled } from 'styled-components'
import { materialUiTheme, spacing } from './theme'
import { routes } from './routes'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  @import url(//fonts.googleapis.com/css?family=Open+Sans:400|Raleway:300);
    
  * {
    box-sizing: border-box;
  }  
  
  body, html, #root {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    height: 100%;
    width: 100%;
  }
  
  h1, h2, h3, h4 {
    font-family: 'Raleway', 'Open Sans', sans-serif;
    margin-bottom: ${spacing.medium}px;
    margin-top: 0;
  }
`

const Layout = styled.div`
  display: flex;
  height: 100%;
`

const rootElement = document.getElementById('root') as HTMLElement

const renderApp = (appRoutes: React.ReactNode) =>
  render(
    <MuiThemeProvider muiTheme={materialUiTheme}>
      <Router history={navigate}>
        <Layout>{appRoutes}</Layout>
      </Router>
    </MuiThemeProvider>,
    rootElement
  )

renderApp(routes)

// This block of code
declare const module: { hot?: { accept: (file: string, callback: () => void) => void } }
if (module.hot) {
  module.hot.accept('./routes', () => renderApp(require('./routes').routes))
}
