import { useState } from 'react'
// import './App.css'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import { CRUDProvider, useCRUD } from './contexts'

function App() {
  const {fetchAPIURL,parameters}=useCRUD();
  const [allData,setallData]=useState([]);
  const [singledata,setSingledata]=useState({});
  const [result, setResult] = useState({})
  const selectAllData=(data)=>{
    parameters.body=JSON.stringify(data)
    parameters.method="POST";
    fetch(fetchAPIURL+"students",parameters).then(Response=>Response.json()).then(data=>{
      setallData([])  
       setallData(data)
    })
    // .catch(error=>console.log(error))
  }
  const selectData=(id)=>{
    setSingledata({});
    delete parameters.body;
    parameters.method="GET"
    fetch(fetchAPIURL+`students/${id}`,parameters).then(Response=>Response.json())
    .then(data=>{
      setSingledata(data)
    })
  }
  const editData=(id,data)=>{
    parameters.body=JSON.stringify(data);
    fetch(fetchAPIURL+`students/update/${id}`,parameters).then(Response=>Response.json())
    .then(data=>{
      setSingledata({})
      setResult(data)
    })
  }
  const deleteData=((id)=>{
    parameters.body=JSON.stringify({student_id:id});
    fetch(fetchAPIURL+`students/delete`,parameters).then(Response=>Response.json()).then(data=>{
      setResult(data)
    })
  })
  const addRecord=(data)=>{
    parameters.body=JSON.stringify(data);
    fetch(fetchAPIURL+"students/add",parameters).then(Respons=>Respons.json()).then(data=>{
      setResult(data)
    })
  }
  return (
    <CRUDProvider value={{ allData,singledata,selectAllData,selectData,editData,deleteData,addRecord,result}}>
    <Header />
      <h1 className='text-3xl text-center my-2'>CRUD operation using Laravel Api </h1>
      <Outlet/>
    </CRUDProvider>
  )
}

export default App
