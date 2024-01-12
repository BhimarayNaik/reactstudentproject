import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Login = () => {
    let navigate=useNavigate();
    let[username,setUsername]=useState("")
    let[password,setPassword]=useState("")
    let handleLogin=(e)=>{
        e.preventDefault();
        let douser=window.localStorage.getItem("username")
        let dopass=window.localStorage.getItem("password")
       if(douser==username && dopass==password){
        navigate("/Student")
        toast.success(`${username} Logged Successfully`)
       }else{
        toast.error("Invalid Credentials")
       }
    }
  return (
    <div id='login'>
        <form action="">
            <fieldset id='fieldset1'>
                <legend>Login Form</legend><br />
                <label htmlFor="">UserName : </label>
                <input type="text" onChange={(e)=>{
                   setUsername(e.target.value)
                }} /><br /><br />
                <label htmlFor="">Password : </label>
                <input type="text" onChange={(e)=>{
                     setPassword(e.target.value)
                }}/><br /><br />
                <button onClick={handleLogin} id='btn'>Login</button><br /><br />
            </fieldset>
        </form>
    </div>
  )
}
export default Login