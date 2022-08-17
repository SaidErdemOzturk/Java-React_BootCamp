import React, { useEffect, useState } from 'react'
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik, Field, Form, useFormik } from 'formik';
import CandidateService from '../services/candidateService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const validationSchema = yup.object().shape({
  firstName: yup.string().required('Required first name'),
  lastName: yup.string().required('Required last name'),
  email: yup.string().email('Invalid email format').required('required email'),
  password: yup.string().required('Required password'),
  identifierNumber: yup.string().required('Required identifier number'),
  birthDay: yup.string().required('Required birth day'),


});
const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  identifierNumber: '',
  birthDay: '',
}

let candidateService = new CandidateService;
const onSubmit = values =>{
  candidateService.add(values).then(response =>{
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
            <FormLabel>First name</FormLabel>
            <FormControl
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.firstName && !formik.errors.firstName}
              isInvalid={formik.touched.firstName && formik.errors.firstName}
            />

            {formik.touched.firstName && formik.errors.firstName ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.firstName}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
          </FormGroup>
          <FormGroup
            as={Col}
            md="6"
            controlId="validationFormik102"
            className="position-relative"
          >
            <FormLabel>Last name</FormLabel>
            <FormControl
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.lastName && !formik.errors.lastName}
              isInvalid={formik.touched.lastName && formik.errors.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.lastName}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
           
           
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
            <FormLabel>Identifier Number</FormLabel>
            <FormControl
              type="text"
              name="identifierNumber"
              value={formik.values.identifierNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.identifierNumber && !formik.errors.identifierNumber}
              isInvalid={formik.touched.identifierNumber && formik.errors.identifierNumber}
            />

            {formik.touched.identifierNumber && formik.errors.identifierNumber ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.identifierNumber}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
          </FormGroup>



          <div className="col-md-4">
            <FormGroup controlId="birthDay">
              <FormLabel>Select Date</FormLabel>
              <FormControl type="date" name="birthDay" value={formik.values.birthDay}  onChange={formik.handleChange} placeholder="Date of Birth" />
           
            </FormGroup>
          </div>
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
