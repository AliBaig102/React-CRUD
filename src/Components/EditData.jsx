import React,{useState,useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { useCRUD } from '../contexts';

export default function EditData() {
    const [student_id,setStudentId]=useState('');
    const student_name=useRef();
    const student_city=useRef();
    const student_fees=useRef();
    const {selectData,singledata,editData}=useCRUD();
    const navigate=useNavigate()

    const getStudentId=()=>{
        selectData("")
        selectData(student_id)
        
    }
    const update=()=>{
        let data={
            "student_name":student_name.current.value,
            "student_city":student_city.current.value,
            "student_fees":student_fees.current.value,
        }
        editData(student_id,data)
        setStudentId("")
        navigate("/edit-record")
    }
    function Form(){
        return(
            <form onSubmit={(e)=>{e.preventDefault();update()}}>
            <div className='flex justify-between gap-4  my-4 text-2xl'>
              <label>Student Name :</label>
              <input 
              type='text'
              placeholder='Student Name'
              className='border-2 border-slate-600 rounded-md px-3'
              defaultValue={singledata.student_name}
              ref={student_name}
            //   value={student_name}
            //   onChange={(e)=>setStudentName(e.target.value)}
              />
            </div>
            <div className='flex justify-between gap-4 my-4 text-2xl'>
              <label>Student City :</label>
              <input 
              type='text' 
              placeholder='Student City' 
              className='border-2 border-slate-600 rounded-md px-3'
              defaultValue={singledata.student_city}
              ref={student_city}
            //   value={student_city}
            //   onChange={(e)=>setStudentCity(e.target.value)}
              />
            </div>
            <div className='flex justify-between gap-4  my-4 text-2xl'>
              <label>Student Fees :</label>
              <input type='text' 
              placeholder='Student Fees' 
              className=' border-slate-600 border-2 rounded-md px-3'
              defaultValue={singledata.student_fees}
              ref={student_fees}
            //   value={student_fees}
            //   onChange={(e)=>setStudentFees(e.target.value)}
              />
            </div>
            <button 
            type='submit'
            className='bg-slate-600 px-3 text-3xl text-white rounded-md mx-auto block'
            >Update</button>
          </form>

        )
    }
    
    return (
      <div className='grid place-content-center'>
        <div>
          <h1 className='text-4xl text-center'>Edit Record</h1>  
            <form onSubmit={(e)=>{e.preventDefault();getStudentId()}}>
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
            >Search</button>
            </form>
        </div>
        {JSON.stringify(singledata)!=="{}" && <Form/>}
      </div>
    )
}
