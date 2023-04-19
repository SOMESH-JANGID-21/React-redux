import React from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './component/Home'
import Menu from './component/Menu'
import Pnf from './component/Pnf'
import Create from './component/Create'
import Update from './component/Update'


function App(){
  return(
    <Router>
      <Menu/>
      <ToastContainer autoClose = {4000} position = {'top-center'} />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/update/:id`} element={<Update />} />
        <Route path={`/create`} element={<Create />} />
        
        <Route path={`/*`} element={<Pnf/>} />

      </Routes>
    </Router>
  )
}

export default App
