import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild'

export class LifeCyclesCDU extends Component {
    constructor(props) {
        console.log('constructor called')
      super(props)
    
      this.state = {
         greeting: 'Hello!'
      }
    }

    updateGreeting = () => {
        console.log('Update Greeting called')
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === 'Hello!' ? 'Goodbay' : 'Hello!' 
            }
        })
    }
    componentDidUpdate() {
        console.log('Component update')
    }
  render() {
    console.log('render method called')
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreeting}>update Greeting</button>
        <LifeCyclesCDUChild/>
        </div>
    )
  }
}

export default LifeCyclesCDU