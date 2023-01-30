import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error:null,
            errorInfo:null,
        }
    }
    componentDidCatch(error,info){
        this.setState({
            error:error,
            errorInfo:info
        })
    }
  render() {
    if(this.state.errorInfo) {
        return (
            <div>
                <h2>An error Has Occured</h2>
                {this.state.error && this.state.error.toString()}
            </div>
          )
    }
    return this.props.children
  }
}
