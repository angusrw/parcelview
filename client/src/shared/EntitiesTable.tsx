import * as React from 'react'
import { colors } from '../theme'
import { AsyncValueProps, withAsyncValue } from './withAsyncValue'
import { listEntities, ParcelViewEntity} from '../api'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

type NameQuant = {
  id: number
  name: string
  quantity: number
  email: string
}

var tStyle = {
  width: '30%',
}

var hStyle = {
  backgroundColor: colors.yellow,
}

var txStyle = {
  font: 'bold 16px arial,sans-serif',
  color: '#000000'
}

// so we have a list of names, and a corresponding list of quantities
// they have the same index, so we can iterate over the arrays, pushing each duo to a list of NameQuant
function GenerateNameQuant (nlist: string[], qlist: number[], elist: string[]) {
  let nameq: NameQuant[] = []
  let newentry: NameQuant
  for (var i = 0; i < nlist.length; i++) {
    newentry = {'id': (i + 1), 'name': nlist[i], 'quantity': qlist[i], 'email': elist[i]}
    nameq.push(newentry)
  }
  return nameq
}

function occurence(arr: any, elist: string[]) {
  var a = [], b = [], prev

  arr.sort()
  for ( var i = 0; i < arr.length; i++ ) {
    if ( arr[i] !== prev ) {
      a.push(arr[i])
      b.push(1)
    } else {
      b[b.length - 1]++
    }
    prev = arr[i]
  }
  let names = a
  let quantities = b
  return GenerateNameQuant(a, b, elist)
}

function EmailList(entries: ParcelViewEntity[]) {
  var iemail: string
  let elist: string[] = []
  for (let entry of entries) {
    iemail = entry.email
    elist.push(iemail)
  }
  return elist
}

function GenerateList (entries: ParcelViewEntity[]) {
  var iname: string
  let namelist: string[] = []
  for (let entry of entries) {
    iname = entry.name
    namelist.push(iname)
  }
  var elist = EmailList(entries)
  return occurence(namelist, elist)
}

class EntitiesTable extends React.Component <AsyncValueProps<Array<ParcelViewEntity>>> {
  constructor(props: AsyncValueProps<Array<ParcelViewEntity>>) {
    super(props)
    // this.state = {data: this.props.async}
  }
  render() {
    let namequantity = GenerateList(this.props.async)

    return (
      <Table fixedHeader={true} style={tStyle}>
      <TableHeader adjustForCheckbox={false} displaySelectAll={false} style={hStyle}>
        <TableRow>
          <TableHeaderColumn style={txStyle}>NAME</TableHeaderColumn>
          <TableHeaderColumn style={txStyle}>ITEMS</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false} showRowHover={true}>
        {namequantity.map( (row, index) => (
          <TableRow key={index}>
            <TableRowColumn>{row.name}</TableRowColumn>
            <TableRowColumn>{row.quantity}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
      </Table>
    )
  }
}

{/*this.props.async*/}

export default withAsyncValue((props) => listEntities())(EntitiesTable)
