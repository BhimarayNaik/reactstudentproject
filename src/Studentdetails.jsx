import React, { useEffect, useState } from 'react'
import axiosinstance from './Helper/axiosinstance';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const Studentdetails = () => {
    let navigate=useNavigate();
    let[details,setDetails]=useState([])
    useEffect(() => {
        let fetchdata = async () => {
          let { data } = await axiosinstance.get("/posts")
          setDetails(data)
        }
        fetchdata()
      }, [])

      let handleDelete=(id)=>{
        axiosinstance.delete(`/posts/${id}`)
        toast.error("Student Deleted")
        window.location.assign("/studentdetails")
    }

  return (
    <div className='detailsblock'>
        <h1 style={{textAlign:"center",color:"darkgoldenrod"}}>Student Details</h1><br />
      <form action="">
        <fieldset>
         <table border={1}>
            <tr>
                <th>Name</th>
                <th>Rollnumber</th>
                <th>Email</th>
                <th>Mobilenumber</th>
                <th>Address</th>
                <th>Percentage</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            
               {details.map((x)=>{
                return(
                    <tr>
                        <th>{x.name}</th>
                        <th>{x.rollnumber}</th>
                        <th>{x.email}</th>
                        <th>{x.mobilenumber}</th>
                        <th>{x.address}</th>
                        <th>{x.percentage}</th>
                        <th><button><Link to={`/update/${x.id}`} id='edit'>Edit</Link></button></th>
                        <th><button onClick={()=>{
                            handleDelete(x.id)
                        }}>Delete</button></th>
                    </tr>
                )
               })} 
            
         </table>
        </fieldset>
      </form><br /><br />
      <button id="btn"onClick={()=>{
   navigate("/student")
         }}>Back</button>
    </div>
  )
}

export default Studentdetails