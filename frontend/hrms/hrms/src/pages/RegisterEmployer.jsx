import React, { useEffect, useState } from 'react'
import {FormControl, FormLabel, FormGroup,Button} from 'react-bootstrap'
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik, Field, Form, useFormik } from 'formik';
import CandidateService from '../services/candidateService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmployerService from '../services/employerService';




const validationSchema = yup.object().shape({
  companyName: yup.string().required('Required companyName'),
  webSite: yup.string().required('Required webSite'),
  email: yup.string().email('Invalid email format').required('required email'),
  password: yup.string().required('Required password'),
  phoneNumber: yup.string().required('Required phoneNumber'),


});
const initialValues = {
  companyName: '',
  webSite: '',
  email: '',
  password: '',
  phoneNumber: '',

}
let employerService = new EmployerService;

const onSubmit = values =>{
  employerService.add(values).then(response =>{
    if(response.data.success){
      toast.success(response.data.message)
    }else{
      toast.error(response.data.message)
    }
  })

}
export default function RegisterCandidate() {
  const [post, setPost] = useState({})


  
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
            md="6"
            controlId="validationFormik101"
            className="position-relative"
          >
            <FormLabel>companyName</FormLabel>
            <FormControl
              type="text"
              name="companyName"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.companyName && !formik.errors.companyName}
              isInvalid={formik.touched.companyName && formik.errors.companyName}
              
            />
            {formik.touched.companyName && formik.errors.companyName ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.companyName}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
          </FormGroup>
          <FormGroup
            as={Col}
            md="6"
            controlId="validationFormik102"
            className="position-relative"
          >
            <FormLabel>webSite</FormLabel>
            <FormControl
              type="text"
              name="webSite"
              value={formik.values.webSite}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.webSite && !formik.errors.webSite}
              isInvalid={formik.touched.webSite && formik.errors.webSite}
            />
            {formik.touched.webSite && formik.errors.webSite ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.webSite}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
           
           
          </FormGroup>
        </Row>
        <Row className="mb-3">
          <FormGroup
            as={Col}
            md="6"
            controlId="validationFormik103"
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
          <FormGroup
            as={Col}
            md="6"
            controlId="validationFormik104"
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
            as={Col}
            md="8"
            controlId="validationFormik105"
            className="position-relative"
          >
            <FormLabel>phoneNumber</FormLabel>
            <FormControl
              type="text"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.phoneNumber && !formik.errors.phoneNumber}
              isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />

            {formik.touched.phoneNumber && formik.errors.phoneNumber ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.phoneNumber}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
          </FormGroup>
        </Row>
        <FormGroup
          className="position-relative"
        >
          <Button type="submit" style={{ width: "50%" }}>Kayıt Ol</Button>
        </FormGroup>

      </form>
    </div>
  )
}
