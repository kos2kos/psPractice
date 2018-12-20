import React, { Component } from 'react'
import HomeRow from './HomeRow.js'
import { Table } from 'semantic-ui-react'

class Board extends Component {
  constructor() {
    super()
    this.state ={
      houses: [{id: 0, house_id: 0, api_id: "", locks: [{id: 0, locked: false}]}]
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/houses")
      .then(res => res.json())
      .then(houseList => this.setState({houses: houseList}))
  }

  render(){
    return (
      <div>
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Access</Table.HeaderCell>
            <Table.HeaderCell >Temperature</Table.HeaderCell>
            <Table.HeaderCell >Power</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.state.houses.map((house) =>  (
            <HomeRow key={house.id} psRow={house}/>
          ))}
        </Table.Body>
      </Table>
      </div>
    )
  }
}

export default Board
