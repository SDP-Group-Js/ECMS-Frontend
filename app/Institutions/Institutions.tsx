import React from 'react'
import Link  from 'next/link'

export default function Insitutions() {
  return (
    <div>
        <br></br>
        <br></br>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">
          <ul className="text-sm p-4 font-medium text-center text-white border-b rounded-t-lg bg-gray-50 dark:border-white dark:text-white dark:bg-neutral-800" id="defaultTab">
              Institutes
              <li className="me-2">
              </li>
          </ul>
          <div id="defaultTabContent">
              <div className=" p-4 bg-white rounded-lg md:p-8 dark:bg-white" id="about" role="tabpanel" aria-labelledby="about-tab">
                  <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-neutral-800">View Institution Details</h2>
              </div>
          </div>
      </div>

    </div>
  )
}
