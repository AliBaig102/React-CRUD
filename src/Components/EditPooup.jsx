import React, { useRef, useEffect } from 'react'
import { useCRUD } from '../contexts'

export default function EditPooup({ closeModal }) {
  const student_name = useRef()
  const student_city = useRef()
  const student_fees = useRef()
  let { singledata, editData, result } = useCRUD();


  const edit = () => {
    editData(singledata.student_id, {
      student_name: student_name.current.value,
      student_city: student_city.current.value,
      student_fees: student_fees.current.value
    })
    closeModal(false)
    // setTimeout(() => {
    //   console.log(result);      
    // },500);
    // if (result.editResult) {
    //   closeModal(false)
    // }

  }
  return (
    <div className="fixed inset-0 bg-[#00000057] grid place-content-center">
      <div className="bg-white  rounded-md shadow-xl p-3">
        <button
          className="bg-neutral-500  text-white flex items-center justify-center w-6 h-6 rounded-full text-2xl relative mb-4 left-[90%]"
          onClick={() => {
            closeModal(false);
          }}
        >X</button>
        {/* <form> */}
        <div className='flex my-3 items-center gap-4'>
          <label>Student Name :</label>
          <input
            defaultValue={singledata.student_name}
            className='border-2 px-2 rounded'
            ref={student_name}
          />
        </div>
        <div className='flex my-3 items-center gap-4'>
          <label>Student City :</label>
          <input
            defaultValue={singledata.student_city}
            className='border-2 px-2 rounded'
            ref={student_city}
          />
        </div>
        <div className='flex my-3 items-center gap-4'>
          <label>Student Fees :</label>
          <input
            defaultValue={singledata.student_fees}
            className='border-2 px-2 rounded'
            ref={student_fees}
          />
        </div>
        <button
          className="bg-neutral-500  text-white flex mx-auto px-4 rounded-md text-2xl "
          onClick={edit}
        >Edit</button>
        {/* </form> */}
      </div>
    </div>
  )
}
