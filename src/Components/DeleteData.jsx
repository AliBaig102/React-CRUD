import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useCRUD } from '../contexts';

export default function DeleteData() {
    const [student_id,setStudentId]=useState('');
    const {deleteData}=useCRUD()
    const navigate=useNavigate()


    return (
        <div className='grid place-content-center'>
          <div>
            <h1 className='text-4xl text-center'>Delete Record</h1>  
              <form 
              onSubmit={(e)=>{
                e.preventDefault();
                deleteData(student_id)
                navigate("/")
            }}>
              <div className='flex justify-between gap-4  my-4 text-2xl'>
                <label>Student Id :</label>
                <input 
                type='text'
                placeholder='Student Id'
                className='border-2 border-slate-600 rounded-md px-3'
                value={student_id}
                onChange={(e)=>setStudentId(e.target.value)}
                />
              </div>
              <button 
              className='bg-slate-600 px-3 text-2xl text-white rounded-md ml-[80%]'
              >Delete</button>
              </form>
          </div>
        </div>
      )
}
