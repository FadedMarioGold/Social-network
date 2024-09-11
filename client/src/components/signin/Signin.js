import React, { useState } from 'react'
import './signinup.css';
import { NavLink } from 'react-router-dom';
const Signin = () => {

  const[logdata,setdata]=useState({email:"",password:""})
  const adddata=(e)=>{
    const {name,value}=e.target;

    setdata(()=>{
      return {
        ...logdata,
        [name]:value
      }
    })
  }
  return (
    <>
    <section>
    <div className="signcontainer">
     <div className="signheader">
      <img src="https://tinyurl.com/3t9v327d" alt="" />
     </div>
     <div className="signform">
      <form >
        <h3>Sign-In</h3>
        <div className="formdetail">
        <label htmlFor="email">Email</label>
        <input type="email" onChange={adddata} value={logdata.email} name='email' id='email' />
        </div>
        <div className="formdetail">
        <label htmlFor="password">Password</label>
        <input type="password" onChange={adddata} value={logdata.password} name='password' placeholder='Atleast 6 character' id='password' />
        </div>
        <button className='signinbtn'>Sign-In</button>
       <a href="">Trouble Signing in?</a>
       <div className="createacc">
        <NavLink to="/register"><button>Create An Account</button></NavLink>
       </div>
      </form>
     </div>
    </div>
    </section>
    </>
  )
}

export default Signin
