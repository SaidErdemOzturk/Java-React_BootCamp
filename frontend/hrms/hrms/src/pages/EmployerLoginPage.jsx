import React, { useEffect, useState } from 'react'
import {FormControl, FormLabel, FormGroup,Button} from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik, Field, Form, useFormik } from 'formik';
import UserService from '../services/userService';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {useDispatch} from "react-redux"
import { login } from '../store/actions/userActions';


const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('required email'),
  password: yup.string().required('Required password'),
});


const initialValues = {
  email: '',
  password: '',
}
let userService = new UserService();

export default function EmployerLoginPage() {

  const dispatch = useDispatch()
  let navigate = useNavigate();

  const onSubmit = values =>{
  
    userService.login(values).then(response=>{
      if(response.data.success){
        toast.success(response.data.message)
        dispatch(login(response.data.data))
        navigate("/employer/homepage")
      }else{
        toast.error(response.data.message)
      }
    })
  }


  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  
  })


  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Row className="mb-6">
          <FormGroup
            as={Col}
            style={{width:"50%", margin:"auto"}}
            md="6"
            className="position-relative"
          >
            <FormLabel>Email</FormLabel>
            <FormControl
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.email && !formik.errors.email}
              isInvalid={formik.touched.email && formik.errors.email}
            />
            {formik.touched.email && formik.errors.email ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.email}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
          </FormGroup>
         
        </Row>
        <Row className="mb-3">

        </Row>
        <FormGroup
            as={Col}
            style={{width:"50%", margin:"auto"}}
            className="position-relative"
            
          >
            <FormLabel>Password</FormLabel>
            <FormControl
              type="text"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.password && !formik.errors.password}
              isInvalid={formik.touched.password && formik.errors.password}
            />
            {formik.touched.password && formik.errors.password ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.password}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
           
          </FormGroup>
        <FormGroup
          className="position-relative"
        >
          <br></br>
          <Button type="submit" style={{ width: "50%" }}>Giriş yap</Button>
        </FormGroup>

      </form>
    </div>
  )
}
