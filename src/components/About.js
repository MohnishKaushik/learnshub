
import React from 'react'
import GC from './GC'
import News from './News'

export default function About(props) {
  return (
    <div>
      {/* <h1>{props.age} {props.yob} {props.mass}</h1> */}
      {/* <News name = "Aaj Tak"/> */}
      <GC ageA = {props.age} yobA = {props.yob}/>
    </div>
  )
}

