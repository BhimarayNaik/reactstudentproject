import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
const Signup = () => {
    let navigate=useNavigate();
    let[username,setUsername]=useState("")
    let[password,setPassword]=useState("")
    let[mobilenumber,setMobilenumber]=useState("")
    let[email,setEmail]=useState("")
    let handleSignup=(e)=>{
        e.preventDefault();
        window.localStorage.setItem("username",username)
        window.localStorage.setItem("password",password)
        window.localStorage.setItem("mobilenumber",mobilenumber)
        window.localStorage.setItem("email",email)
        navigate("/login")
        window.location.assign("/login")
        toast.success("Signedup Successfully")
    }
  return (
    <div id="signup">
        <form action="" >
            <fieldset id="fieldset1" style={{textAlign:"center"}}>
                <legend>Signup Form</legend>
                <table id='table1'>
                  <br />
                  <tr>
                <td><label htmlFor="">UserName : </label></td>
                <td><input type="text" onChange={(e)=>{
                   setUsername(e.target.value)
                }} /></td>
                </tr>
                <tr>
                <td><label htmlFor="">Mobile Number : </label></td>
                <td><input type="text" onChange={(e)=>{
                     setMobilenumber(e.target.value)
                }}/></td>
                 </tr>
                 <tr>
                <td><label htmlFor="">Email : </label></td>
                <td><input type="text" onChange={(e)=>{
                     setEmail(e.target.value)
                }}/></td>
                </tr>
               <tr>
                <td><label htmlFor="">Password : </label></td>
                <td><input type="text" onChange={(e)=>{
                     setPassword(e.target.value)
                }}/></td>
                </tr><br />
                
                <button onClick={handleSignup} id="btn">Signup</button>
                <br /><br />
                </table>
            </fieldset>
        </form>
    </div>
  )
}

export default Signup