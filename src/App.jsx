import React from 'react'
import Nav from './Nav'
import Login from './Login'
import Signup from './Signup';
import Student from './Student';
import "./global.css"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Studentdetails from './Studentdetails';
import Update from './Update';

const App = () => {
  return (
    <Router>
      <ToastContainer/>
        <Nav/>
        <Routes>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/student' element={<Student/>}/>
            <Route path='/studentdetails' element={<Studentdetails/>}/>
            <Route path='/update/:id' element={<Update/>}/>
        </Routes>
    </Router>
  )
}

export default App