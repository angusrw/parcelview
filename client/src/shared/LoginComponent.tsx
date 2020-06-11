import * as React from 'react'
import { colors } from '../theme'
import { AsyncValueProps, withAsyncValue } from './withAsyncValue'
import { LoginEntity, login, checkLogin } from '../api'
import { navigate } from '../navigate'
import { TextField } from 'material-ui'
import { FlatButton } from 'material-ui'

let loginEntity: LoginEntity = {
  username : '',
  password: ''
}

function handleUsernameChange(event: any) {
  loginEntity.username = event.target.value
}

function handlePasswordChange(event: any) {
  loginEntity.password = event.target.value
}

class LoginComponent extends React.Component <AsyncValueProps<Boolean>> {
  constructor(props: AsyncValueProps<Boolean>) {
    super(props)
    this.state = {data: this.props.async}
  }
  render() {
    let loggedIn = this.props.async
    let loginComp = () => {
      login(loginEntity)
        .then(response => console.log(response))
        .catch(err => console.error(err))
      navigate.push('/view')
    }
    return (
      <div>
        <p>Username:</p>
        <TextField type="text" onChange={handleUsernameChange} />
        <p>Password:</p>
        <TextField type="password" onChange={handlePasswordChange} />
        <br/>
        <FlatButton
          children={'Login'}
          backgroundColor={colors.yellow}
          hoverColor={colors.red}
          onClick={() => {
            loginComp()
            }
          }
        />
        {/*<FlatButton
          children={'Logout'}
          onClick={() =>
            logout()
              .then(response => console.log(response))
              .catch(err => console.error(err))
          }
        />
        <FlatButton
          children={'Check Status'}
          onClick={() => alert(loggedIn)
          }
        />*/}
      </div>
    )
  }
}

export default withAsyncValue((props) => checkLogin())(LoginComponent)