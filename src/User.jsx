import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {Id} = useParams()
  return (
    <div>This is User {Id}</div>
  )
}

export default User