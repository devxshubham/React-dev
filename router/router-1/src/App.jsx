import React,{ Suspense, useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
const DashBoard = React.lazy(()=> import('./components/dashboard'))
const Landing = React.lazy(()=>import('./components/landing'))

function App(){
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={ <Suspense> <DashBoard/> </Suspense>} />
          <Route path="/" element={<Landing/>} />
        </Routes>
      </BrowserRouter>
    </>

  )
}
function Appbar(){
  const navigate = useNavigate();
  return <div>
    <button onClick={()=>{
      navigate('/')
    }}>landing</button>
    <button onClick={()=>{
      navigate('/dashboard')
    }}>dashboard</button>
</div>
}
export default App;