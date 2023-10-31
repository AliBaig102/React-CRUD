import { useState } from 'react'
// import './App.css'
import Header from './Components/Header'
import Body from './Components/Body'

function App() {

  return (
    <>
    <Header />
      <h1 className='text-3xl text-center my-2'>CRUD operation using Laravel Api </h1>
      <Body/>
    </>
  )
}

export default App
