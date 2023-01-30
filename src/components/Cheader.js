import React, { Component } from 'react'

export default class Cheader extends Component {
    render() {
        return (
            <div>
                <h2>
                    {this.props.data.welcome}
                    {this.props.data.title}
                    {this.props.data.author.firstName}
                    {this.props.data.author.secondName}
                    {this.props.data.dob}
                </h2>
            </div>
        )
    }
}
