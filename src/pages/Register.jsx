import React from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import *as Yup from 'yup'

const Register = () => {
  return (

    <Formik

    initialValues={{firstname:'', lastname:'', email:'', password:'', cpassword:''}}

    validationSchema={Yup.object({
        firstname: Yup.string()
        .required('First Name is Mandatory.')
        .max(20,'Must be of 20 Characters or less.'),

        lastname: Yup.string()
        .required('Last Name is Mandatory.')
        .max(20,'Must be of 20 Characters or less.'),

        email:Yup.string()
        .email('Invalid Email ID.')
        .required("Email is mandatory.")
        ,

        password: Yup.string()
        .required("Password is Mandatory.")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-_])[A-Za-z\d@$!%*?&-_]{8,50}$/, "Password must be like this: Abc@345")
      
        ,

        cpassword: Yup.string()
        .required('Confirm password is Mandtory.')
        .oneOf([Yup.ref('password'),null], 'Password and confirm password did not match.')
    })}

    >
        <div className="container my-4">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 shadow-lg rounded-4">
                    <Form className='p-3 '>
                        <div className="mb-2">
                            <label htmlFor="firstname">First Name:</label>
                            <Field type='text' name='firstname' id='firstname' className='form-control'></Field>

                            <ErrorMessage name='firstname'>
                                { msg=> 
                                 <div style={{color:'red'}}>
                                    {msg}
                                </div>
                                // {msg}
                                }  
                                {/* msg chai yup bata aako */}
                            </ErrorMessage>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="lastname">Last Name:</label>
                            <Field type='text' name='lastname' id='lastname' className='form-control'></Field>
                            <ErrorMessage name='lastname'>
                                {msg=> <div style={{color:'red'}}>{msg}</div>}  
                                {/* msg chai yup bata aako */}
                            </ErrorMessage>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="email">Email:</label>
                            <Field type='email' name='email' id='email' className='form-control'></Field>
                            <ErrorMessage name='email'>
                                {msg=> <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        

                        <div className="mb-2">
                            <label htmlFor="password"> Password:</label>
                            <Field type='password' name='password' id='password' className='form-control'>

                            </Field>
                            <ErrorMessage name='password'>
                                {msg=> <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="cpassword">Confirm Password:</label>
                            <Field type='password' name='cpassword' id='cpassword' className='form-control'>

                            </Field>
                            <ErrorMessage name='cpassword'>
                                {msg=> <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <button className='btn btn-primary py-1 px-3'>Register</button>
                    </Form>
                </div>
            </div>
        </div>

    </Formik>
  )
}

export default Register