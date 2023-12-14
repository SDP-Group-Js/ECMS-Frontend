import React from 'react'
import { Link } from 'react-router-dom'

export default function Institutions() {
  return (
    <div>
        <p>this is institutions page</p>
        <Link to="/" className="underline">go to dashboard</Link>
    </div>
  )
}
