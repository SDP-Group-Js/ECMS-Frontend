import React from 'react'
import { Link } from 'react-router-dom'

export default function Users() {
  return (
    <div>
        <p>this is Users page</p>
        <Link to="/" className="underline">go to dashboard</Link>
    </div>
  )
}
