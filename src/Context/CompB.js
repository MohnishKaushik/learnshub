import React, { useContext } from 'react'
import { FirstName,LastName } from '../App'
export default function CompB(props) {
  const fname = useContext(FirstName)
  const lname = useContext(LastName)
  return (
    <div>
      <h1>My name is {fname} {lname}</h1>
    </div>
  )
}