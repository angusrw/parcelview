import * as React from 'react'
import { colors } from '../theme'
import { navigate } from '../navigate'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import {
  CreateParcelViewEntity, deleteEntry
} from '../api'

let entry: CreateParcelViewEntity = {
  name: '',
  email: ''
}

function handleNameChange(event: any) {
  entry.name = event.target.value
}

function handleClick() {
  deleteEntry(entry)
    .then(response => console.log(response))
    .catch(err => console.error(err))

  navigate.push('/view')
  window.location.reload()
}
export const DeleteEntry = () =>
  <div>
    <h1>Collect Items</h1>
    <p>Name:</p>
    <TextField type="text" hintText={'Enter recipient name here...'} onChange={handleNameChange}/>
    <br/>
    <FlatButton
      label="Confirm"
      backgroundColor={colors.green}
      hoverColor={colors.red}
      onClick={() => handleClick()}
    />
  </div>
