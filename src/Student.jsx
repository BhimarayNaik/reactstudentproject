import React, { useState } from 'react'
 import {useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosinstance from './Helper/axiosinstance';
const Student = () => {
  let navigate=useNavigate()
  let[name,setName]=useState("")
  let[rollnumber,setRollnumber]=useState("")
  let[email,setEmail]=useState("")
  let[mobilenumber,setMobilenumber]=useState("")
  let[address,setAddress]=useState("")
  let[percentage,setPercentage]=useState("")

  let addStudent=(e)=>{
    e.preventDefault();
    let payload={
       name,rollnumber,email,mobilenumber,address,percentage
    }
    axiosinstance.post("/posts",payload)
    toast.success("Student Added Successfully")
   navigate("/Studentdetails")
  }
  return (
    <div className='studentblock'>
<form action="">
  <fieldset id="fieldset1" style={{textAlign:"center"}}>
    <legend>Add Student</legend>
   <table id='table1'>
    <tr>
      <td><label htmlFor="">Student Name : </label></td>
      <td><input type="text" onChange={(e)=>{
        setName(e.target.value)
      }}/></td>
    </tr>
    <tr>
    <td><label htmlFor="">RollNumber : </label></td>
    <td><input type="text" onChange={(e)=>{
        setRollnumber(e.target.value)
      }}/></td>
    </tr>
    <tr>
      <td><label htmlFor="">Email : </label></td>
      <td><input type="text" onChange={(e)=>{
        setEmail(e.target.value)
      }}/></td>
    </tr>
    <tr>
      <td><label htmlFor="">MobileNumber : </label></td>
      <td><input type="text" maxLength="10"onChange={(e)=>{
        setMobilenumber(e.target.value)
      }}/></td>
    </tr>
    <tr>
      <td><label htmlFor="">Address : </label></td>
      <td><input type="text" onChange={(e)=>{
        setAddress(e.target.value)
      }}/></td>
    </tr>
    <tr>
      <td><label htmlFor="">Percentage : </label></td>
      <td><input type="text" onChange={(e)=>{
        setPercentage(e.target.value)
      }} /></td>
    </tr><br /> 
<tr>
  <td><button onClick={addStudent} id='btn'> ADD </button></td>
  <td><button id='btn' onClick={()=>{
   navigate("/studentdetails")
  }} >View Student </button></td>
</tr>
<br />
   </table>
  </fieldset>
</form>
    </div>
  )
}

export default Student