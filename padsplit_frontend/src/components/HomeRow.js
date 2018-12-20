import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

class HomeRow extends Component {
  constructor() {
    super()
    this.state = {
      lock: "Locked"
    }
  }

  componentDidMount() {
    this.changeLock(this.props.psRow.locks.locked)
  }

  changeLock = (bool) => {
    console.log(bool);
    let lockState = (bool ? 'Unlocked': 'Locked')
    this.setState({lock: lockState}, () => {
      console.log(this.state.lock);
    })
  }

  printLocked = (bool) => {
    let lockState = (bool ? 'Unlocked': 'Locked')
    return lockState
  }

  updateLock = (id) => {
    console.log(id);
    let updatedLock = this.props.psRow.locks[0]
    updatedLock.locked = !updatedLock.locked
    fetch(`http://localhost:3000/locks/${id}`, {
      method: 'PATCH',
      headers: HEADERS,
      body: JSON.stringify({
          lock: [updatedLock]
      })
    })
      .then(res => res.json())
      .then(newLock => (this.changeLock(newLock.locked)))
  }

  render(){
    console.log(this.state.locked);
    return(
      <Table.Row>
        <Table.Cell>{this.props.psRow.address}</Table.Cell>
        <Table.Cell onClick={() => {this.updateLock(this.props.psRow.locks[0].id)}}> {this.printLocked(this.props.psRow.locks[0].locked)}</Table.Cell>
        <Table.Cell >73</Table.Cell>
        <Table.Cell >7kyh</Table.Cell>
      </Table.Row>
    )
  }
}

export default HomeRow
