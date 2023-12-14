import React from 'react'
import Link  from 'next/link'

export default function Complaints() {
  return (
    <div>
        <p>this is Complaints page</p>
        <Link href="/" className="underline">go to dashboard</Link>
    </div>
  )
}
