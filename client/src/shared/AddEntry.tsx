import * as React from 'react'
import { colors } from '../theme'
import { navigate } from '../navigate'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import {
  CreateEmailEntity, createParcelViewEntity, CreateParcelViewEntity, sendMailApi
} from '../api'

let newentity: CreateParcelViewEntity = {
  name: '',
  email: ''
}

let email: CreateEmailEntity = {
  name: '',
  address: ''
}

function handleNameChange(event: any) {
  newentity.name = event.target.value
  email.name = event.target.value
}

function handleEmailChange(event: any) {
  newentity.email = event.target.value
  email.address = event.target.value
}

function buttonLogic() {
  createParcelViewEntity(newentity)
    .then(response => console.log(response))
    .catch(err => console.error(err))
  sendMailApi(email)
    .then(response => console.log(response))
    .catch(err => console.error(err))

  navigate.push('/view')
  window.location.reload()
}
export const AddEntry = () =>
  <div>
    <h1>Add New Item</h1>
    <p>Name:</p>
    <TextField type="text" hintText={'Enter recipient name here...'} onChange={handleNameChange} />
    <p>Email:</p>
    <TextField type="text" hintText={'Enter recipient email here...'} onChange={handleEmailChange} />
    <br/>
    <FlatButton
      label="Confirm"
      backgroundColor={colors.green}
      hoverColor={colors.red}
      onClick={() => buttonLogic()}
    />
  </div>