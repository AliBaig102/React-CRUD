import React, {useEffect, useState} from 'react'
import {CRUDProvider, useCRUD} from "../contexts"
import View from './View';
import EditPooup from './EditPooup';
import DeletePopup from './DeletePopup';

export default function Body() {
    // const [allData,setallData]=useState([]);
    const [viewModal,setViewModal]=useState(false);
    const [editModal,setEditModal]=useState(false);
    const [deleteModal,setDeleteModal]=useState(false);
    const [deleteId,setDeleteId]=useState(false);
    // const [singledata,setSingledata]=useState({});
    const {allData,selectData,selectAllData}=useCRUD();

   

    
    useEffect(() => {
        selectAllData();
    }, [allData]);

    return (
      // <CRUDProvider value={{ allData,singledata,selectAllData,selectData,editData,deleteData,addRecord}}>
      <>

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
        {allData.map((item,index) => (
            <tr key={index}>
            <td>{item.student_id}</td>
            <td>{item.student_name}</td>
            <td>{item.student_city}</td>
            <td>{item.student_fees}</td>
            <td><button 
            className='bg-blue-600 text-white px-2 rounded'
            onClick={()=>{
              selectData(item.student_id)
              setEditModal(true)
            }}
            >Edit</button></td>
            <td><button className='bg-green-600 text-white px-2 rounded' 
            onClick={()=>{
              selectData(item.student_id)
              setViewModal(true)
              }}
            >View</button></td>
            <td><button className='bg-red-600 text-white px-2 rounded'
            onClick={()=>{
              setDeleteModal(true)
              setDeleteId(item.student_id)
              }}
            >Delete</button></td>
            </tr>
        ))}
        </tbody>
    </table>
    {viewModal && <View closeModal={setViewModal}/> }
    {editModal && <EditPooup closeModal={setEditModal} 
    // setSingledata={setSingledata}
     />}
    {deleteModal && <DeletePopup closeModal={setDeleteModal} deleteId={deleteId}/>}
      </>
    // </CRUDProvider>
  )
            }