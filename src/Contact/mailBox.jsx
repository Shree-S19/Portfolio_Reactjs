import React from 'react'
import "./contact.css"
import {useFormik} from "formik"
import {motion } from "framer-motion"
import * as Yup from "yup"
import emailjs from 'emailjs-com';

export default function MailBox() {
    const formik  = useFormik({
        initialValues:{
            Name:"",
            Email :"",
            Message:""
        },
        onSubmit:(values)=>{
            sendEmail(values);
        },
        validationSchema:Yup.object({
            Name:Yup.string()
            .max(25,"must be less than 15 characters!")
            .min(2,"must be more than 2 characters")
            .required("Required"),
            Email:Yup.string()
            .email("Invalid email address!")
            .required("Required"),
            Message:Yup.string()
            .required("Required")
        })
    });
    const sendEmail = (values) => {
        const templateParams = {
          from_name: values.Name,
          to_email: values.Email,
          message: values.Message,
        };
        emailjs.send(
          'service_52tswxe',
          'template_f6c71wh',
          templateParams,
          'NTT5QFfUXQmTJgayk'
        )
          .then((response) => {
            console.log('Email sent successfully:', response);
            alert('Email sent successfully!');
          })
          .catch((error) => {
            console.error('Error sending email:', error);
            alert('Error sending email.');
          });
      };
  return (
    <form id='form-container' onSubmit={formik.handleSubmit}>
        <label>Full Name</label>
            <input 
                id='user_name'
                className='input-field'
                name = "Name"
                type="text"
                placeholder='Enter your name'
                onChange={formik.handleChange}
                value={formik.values.Name}
            />
            {formik.errors.Name && (formik.touched.Name &&<span style={{color:"red"}}>{formik.errors.Name}</span>)}
        <label>Email</label>
            <input 
                id='email'
                className='input-field'
                name = "Email"
                type="email"
                placeholder='Mail-ID'
                onChange={formik.handleChange}
                value={formik.values.Email}
            />
            {(formik.touched.Email &&formik.errors.Email)&&<span style={{color:"red"}}>{formik.errors.Email}</span>}
        <label>Message</label>
            <textarea 
                id='message'
                className='input-field text-field'

                name = "Message"
                type='text'
                placeholder='What is your message :)'
                onChange={formik.handleChange}
                value={formik.values.Message}
            />
            {(formik.errors.Message && formik.touched.Message) &&<span style={{color:"red"}}>{formik.errors.Message}</span>}
        <motion.div className='btn-container'  whileTap={{opacity:0.8}}>
            <button className='sub-btn' type='submit' onClick={formik.onSubmit}>
                Submit
            </button>
        </motion.div>
    </form>
  )
}
