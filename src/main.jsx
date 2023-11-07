import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Body from './Components/Body.jsx'
import AddData from './Components/addData.jsx'
import EditData from './Components/EditData.jsx'
import DeleteData from './Components/DeleteData.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Body/>}/>
        <Route path='add-record' element={<AddData/>}/>
        <Route path='edit-record' element={<EditData/>}/>
        <Route path='delete-record' element={<DeleteData/>}/>
      {/* </Route> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   </React.StrictMode>
)
