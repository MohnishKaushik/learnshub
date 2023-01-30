import React, { Component } from 'react'
import Cheader from './Cheader'

const data = {
    welcome: " Welcome to react classes",
    title: " Props in classes",
    author: {
        firstName: " Mohnish",
        secondName: " Kaushik"
    },
    dob: " 20-08-2001"
}
export default class Fcheader extends Component {
    render() {
        return (
            <div>
                <Cheader data = {data}/>
            </div>
        )
    }
}
