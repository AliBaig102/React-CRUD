import React, { useState } from 'react'
import { useCRUD } from '../contexts';

export default function AddData() {
  // const history=usehis
  const [student_name,setStudentName]=useState('');
  const [student_city,setStudentCity]=useState('');
  const [student_fees,setStudentFees]=useState('');
  const {addRecord}=useCRUD();
  const add=()=>{
    // let data={student_name,student_city,student_fees};
    addRecord({student_name,student_city,student_fees})
    
  }
  return (
    <div className='grid place-content-center'>
      <div>
        <form onSubmit={(e)=>{e.preventDefault();add()}}>
        <h1 className='text-4xl text-center'>Add Record</h1>  
          <div className='flex justify-between gap-4 border-2 my-4 text-2xl'>
            <label>Student Name :</label>
            <input 
            type='text'
            placeholder='Student Name'
            className='border-2 border-slate-600 rounded-md px-3'
            value={student_name}
            onChange={(e)=>setStudentName(e.target.value)}
            />
          </div>
          <div className='flex justify-between gap-4 border-2 my-4 text-2xl'>
            <label>Student City :</label>
            <input 
            type='text' 
            placeholder='Student City' 
            className='border-2 border-slate-600 rounded-md px-3'
            value={student_city}
            onChange={(e)=>setStudentCity(e.target.value)}
            />
          </div>
          <div className='flex justify-between gap-4 border-2 my-4 text-2xl'>
            <label>Student Fees :</label>
            <input type='text' 
            placeholder='Student Fees' 
            className='border-2 border-slate-600 rounded-md px-3'
            value={student_fees}
            onChange={(e)=>setStudentFees(e.target.value)}
            />
          </div>
          <button 
          type='submit'
          className='bg-slate-600 px-3 text-3xl text-white rounded-md mx-auto block'
          onClick={(e)=>{e.preventDefault();add()}}
          >Add</button>
        </form>
      </div>
    </div>
  )
}
