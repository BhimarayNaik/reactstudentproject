import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <div className='logoblock'><img src="https://sagritaraschoolportblair.com/wp-content/uploads/2021/04/student-information-300x300.png" alt="" /></div>
        <div className='menublock'>
         <ol>
            <li><Link to={"/signup"}>Signup</Link></li>
            <li><Link to={"/login"}>Login</Link></li>
         </ol>
        </div>
    </nav>
  )
}

export default Nav