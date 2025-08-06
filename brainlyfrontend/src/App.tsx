 
 
import './App.css'
import { Signup } from './components/signup'
import { Dashboard } from './dashboard'
import { ContextModel } from './components/contentmodel'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin } from './components/signin'
 
 
function App() {
  const [open,setopen] =useState(false);
  
   

  return (
    <BrowserRouter>
     <ContextModel open={open} onClose={()=>{setopen(false)}}/>
    
  
    <Routes>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/' element={

      <Dashboard onClick={()=>{
        setopen(true)
      }}/>
    }/>

    {/* <Signup/> */}
    
    </Routes>
    </BrowserRouter>
  
  )
}

export default App
