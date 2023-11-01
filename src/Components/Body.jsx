import React, {useEffect, useState} from 'react'

export default function Body() {
    const [data,setData]=useState([]);
    let URL="http://127.0.0.1:8000/api/students";
    useEffect(() => {
        fetch(URL,{
            Method: 'POST',
            Headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
        }).then(response=>response.json()).then(data=>{
            setData(data);
        })
    }, []);
  return (
    <table className='border-2 mx-auto my-4'>
        <thead >
             <tr>
            <th>Student id</th>
            <th>Student Name</th>
            <th>Student City</th>
            <th>Student Fees</th>
            <th>Edit</th>
            <th>View</th>
            <th>Delete</th>
             </tr>
        </thead>
        <tbody>
        {data.map((item,index) => (
            <tr key={Date.now()}>
            <td key={Date.now()}>{item.student_id}</td>
            <td key={Date.now()}>{item.student_name}</td>
            <td key={Date.now()}>{item.student_city}</td>
            <td key={Date.now()}>{item.student_fees}</td>
            <td key={Date.now()}><button className='bg-blue-600 text-white px-2 rounded'>Edit</button></td>
            <td key={Date.now()}><button className='bg-green-600 text-white px-2 rounded'>View</button></td>
            <td key={Date.now()}><button className='bg-red-600 text-white px-2 rounded'>Delete</button></td>
            </tr>
        ))}

        </tbody>
    </table>
  )
}
