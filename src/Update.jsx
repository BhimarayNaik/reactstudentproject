import React, { useState ,useEffect} from 'react'
 import {useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosinstance from './Helper/axiosinstance';
const Update = () => {
  let navigate=useNavigate()
  let { id } = useParams()
  let[name,setName]=useState("")
  let[rollnumber,setRollnumber]=useState("")
  let[email,setEmail]=useState("")
  let[mobilenumber,setMobilenumber]=useState("")
  let[address,setAddress]=useState("")
  let[percentage,setPercentage]=useState("")

  useEffect(() => {
    let fetchdata = async () => {
      let { data } = await axiosinstance.get(`/posts/${id}`)
      setName(data.name)
      setRollnumber(data.rollnumber)
      setEmail(data.email)
      setMobilenumber(data.mobilenumber)
      setAddress(data.address)
      setPercentage(data.percentage)
    }
    fetchdata()
  }, [])

  let updateStudent=(e)=>{
    e.preventDefault();
    let payload={
       name,rollnumber,email,mobilenumber,address,percentage
    }
    axiosinstance.put(`/posts/${id}`,payload)
    toast.success(`${name} Updated`)
   navigate("/studentdetails")
  }
  return (
    <div className='studentblock'>
<form action="">
  <fieldset id="fieldset1" style={{textAlign:"center"}}>
    <legend>Update Student</legend>
   <table id='table1'>
    <tr>
      <td><label htmlFor="">Student Name : </label></td>
      <td><input value={name} type="text" onChange={(e)=>{
        setName(e.target.value)
      }}/></td>
    </tr>
    <tr>
    <td><label htmlFor="">RollNumber : </label></td>
    <td><input value={rollnumber} type="text" onChange={(e)=>{
        setRollnumber(e.target.value)
      }}/></td>
    </tr>
    <tr>
      <td><label htmlFor="">Email : </label></td>
      <td><input value={email} type="text" onChange={(e)=>{
        setEmail(e.target.value)
      }}/></td>
    </tr>
    <tr>
      <td><label htmlFor="">MobileNumber : </label></td>
      <td><input value={mobilenumber} type="text" onChange={(e)=>{
        setMobilenumber(e.target.value)
      }}/></td>
    </tr>
    <tr>
      <td><label htmlFor="">Address : </label></td>
      <td><input value={address} type="text" onChange={(e)=>{
        setAddress(e.target.value)
      }}/></td>
    </tr>
    <tr>
      <td><label htmlFor="">Percentage : </label></td>
      <td><input value={percentage} type="text" onChange={(e)=>{
        setPercentage(e.target.value)
      }} /></td>
    </tr><br /> 
<tr>
  <td><button onClick={updateStudent} id='btn'> Update </button></td>
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

export default Update