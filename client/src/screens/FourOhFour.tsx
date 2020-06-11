import * as React from 'react'
import styled from 'styled-components'
import { colors, spacing } from '../theme'
import { PVheader } from '../shared/PVheader'

const FourOhFourWrapper = styled.div`
  align-items: center;
  background-color: ${colors.blueDark};  
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: ${spacing.wide}px;
  
  .header-text {
    color: ${colors.green};
    margin-bottom: ${spacing.wide}px;
    letter-spacing: 3px;
    font-size: 80px;
  }
  
  .message-text {
    color: white;   
    
    a {
     color: white;
     text-decoration: underline;
    } 
  }
`

export const FourOhFour = () =>
  <FourOhFourWrapper>
    <PVheader/>
    <div className="header-text">404</div>
    <div className="message-text">
      If you think something should be here, please let us know by {'\n'}
      <a href="https://bitbucket.org/ghyston/parcel-view/issues">creating an issue</a>
    </div>
  </FourOhFourWrapper>