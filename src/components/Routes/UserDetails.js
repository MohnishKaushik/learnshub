import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    const params = useParams()
    const userID = params.id
  return (
    <div>Details about User {userID}</div>
  )
}
