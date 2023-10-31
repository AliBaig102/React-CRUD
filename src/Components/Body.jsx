import React from 'react'

export default function Body() {
  return (
    <table className='border-2 mx-auto my-4'>
        <thead >
            {/* <tr> */}
            <th>Student id</th>
            <th>Student Name</th>
            <th>Student City</th>
            <th>Student Fees</th>
            <th>Edit</th>
            <th>View</th>
            <th>Delete</th>
            {/* </tr> */}
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Student </td>
            <td>Karachi</td>
            <td>6000</td>
            <td><button className='bg-blue-600 text-white px-2 rounded'>Edit</button></td>
            <td><button className='bg-green-600 text-white px-2 rounded'>View</button></td>
            <td><button className='bg-red-600 text-white px-2 rounded'>Delete</button></td>
            </tr>
            <tr>
            <td>1</td>
            <td>Student </td>
            <td>Karachi</td>
            <td>6000</td>
            <td><button className='bg-blue-600 text-white px-2 rounded'>Edit</button></td>
            <td><button className='bg-green-600 text-white px-2 rounded'>View</button></td>
            <td><button className='bg-red-600 text-white px-2 rounded'>Delete</button></td>
            </tr>
        </tbody>
    </table>
  )
}
