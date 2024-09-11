import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Signup = () => {

   const[udata,setudata]=useState({fname:"",email:"",password:"",pass:""});
  const adddata=(e)=>{
    const {name,value}=e.target;
console.log(udata);
    setudata(()=>{
      return {
        ...udata,
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
        <h3>Create Account</h3>
        <div className="formdetail">
        <label htmlFor="fname">Name</label>
        <input type="text" onChange ={adddata} value={udata.fname} name='fname' id='fname' />
        </div>
        <div className="formdetail">
        <label htmlFor="email">Email</label>
        <input type="email" onChange ={adddata} value={udata.email}  name='email' id='email' />
        </div>
        <div className="formdetail">
        <label htmlFor="password">Password</label>
        <input type="password"onChange ={adddata} value={udata.password}  name='password' placeholder='Atleast 6 character' id='password' />
        </div>
        <div className="formdetail">
        <label htmlFor="pass">Repeat password</label>
        <input type="password" onChange ={adddata} value={udata.pass}  name='pass' id='pass' />
        </div>
        <button className='signinbtn'>Register</button>
       <a href="">Trouble Signing in?</a>
       <div className="createacc">
        <NavLink to="/login"><button>Log in to an existing account</button></NavLink>
       </div>
      </form>
     </div>
    </div>
    </section>
    </>
  )
}

export default Signup
