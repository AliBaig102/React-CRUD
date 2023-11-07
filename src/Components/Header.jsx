import React from 'react'
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <nav className='bg-gray-500 px-4 py-2'>
        <ul className='flex items-center justify-center gap-5'>
            <li className='bg-white px-4 py-2 rounded cursor-pointer text-2xl font-bold hover:bg-yellow-200'>
              <Link to='add-record'>Add Record</Link>
            </li>
            <li className='bg-white px-4 py-2 rounded cursor-pointer text-2xl font-bold hover:bg-yellow-200'>
              <Link to='edit-record'>Edit Record</Link>
              </li>
            <li className='bg-white px-4 py-2 rounded cursor-pointer text-2xl font-bold hover:bg-yellow-200'>
              <Link to='delete-record'>Delete Record</Link>
              </li>
        </ul>
    </nav>
  )
}
