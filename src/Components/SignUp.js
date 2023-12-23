//import React, { useState } from 'react'
import { useFormik } from 'formik';


const SignUp = () => {
  const formik =useFormik({
    initialValues : {
      name :'',
      email:'',
      password:'',
    },
    onSubmit :(values,{resetForm})=>{
      console.log(values);
      resetForm({values:""})
    }
  })
//     const [name, setName] =useState('');
//     const [email, setEmail] =useState('');
//     const [password, setPassword] =useState('');
    
//     const HandleNameChange =(e) =>{
//     setName(e.target.value);
// }
// const HandleEmailChange =(e) =>{
//     setEmail(e.target.value);
// }
// const HandlePasswordChange =(e) =>{
//     setPassword(e.target.value);
// }
// const handleSubmit =(e) =>{
//     e.preventDefault();

//     const newUser ={
//         name,email,password,
//     }
//     console.log(newUser)
// }
  return (
    <div>
      <h2>User SignUP</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name}/>
        </div>
        <div>
            <label htmlFor='email'>email:</label>
            <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>
        </div>
        <div>
            <label htmlFor='password'>password:</label>
            <input type='password' id='password' name='password' onChange={formik.handleChange} value={formik.values.password}/>
        </div>
        <button type='submit'>SignUp</button>
      </form>
    </div>
  )
}

export default SignUp
