import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import  {loginformat}  from './Schemayup'

function Two() {
    let formikvalue={
        name:"",email:""
    }
    let  formik=useFormik({
initialValues:formikvalue,
validationSchema:loginformat,
onSubmit:async(values)=>{
    await axios.post("http://localhost:5000/users",values)
    .then((value)=>console.log(value))
    .catch(err=>console.log(err))
}

    })
    console.log(formik)
  return (
    <form  onSubmit={formik.handleSubmit}      className='m-5'>
    <div className='m-5'>
        <label>name</label>
        <input  type="text" 
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
        />
        <h6 className="text-danger">{formik.errors.name}</h6>
    </div>
    <div className='m-5'>
        <label>email</label>
        <input type="email"
        name="email"
             value={formik.values.email}
            onChange={formik.handleChange}
        />
      <h6 className='text-danger'> {formik.errors.email}</h6> 
    </div>
    <div>
        <input type="submit" value="submit"/>
    </div>
    
</form>)
}

export default Two