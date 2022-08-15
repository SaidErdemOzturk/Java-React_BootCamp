import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik } from 'formik';
import CandidateService from '../services/candidateService';




const schema = yup.object().shape({
    companyName: yup.string().required(),
    webSite: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  phoneNumber: yup.string().required(),


});

const register = ()=>{

}
export default function RegisterEmployer() {

  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
            companyName: '',
            webSite:'',
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Row className="mb-6">
              <Form.Group
                as={Col}
                md="6"
                controlId="validationFormik101"
                className="position-relative"
              >
                <Form.Label>Company name</Form.Label>
                <Form.Control
                  type="text"
                  name="companyName"
                  value={values.companyName}
                  onChange={handleChange}
                  isValid={touched.companyName && !errors.companyName}
                />
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationFormik102"
                className="position-relative"
              >
                <Form.Label>Web Site</Form.Label>
                <Form.Control
                  type="text"
                  name="webSite"
                  value={values.webSite}
                  onChange={handleChange}
                  isValid={touched.webSite && !errors.webSite}
                />

                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="6"
                controlId="validationFormik103"
                className="position-relative"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationFormik104"
                className="position-relative"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="Password"
                  placeholder="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="12"
                controlId="validationFormik105"
                className="position-relative"
              >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={values.identifierNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.identifierNumber}
                  style={{width:"50%",margin:"auto"}}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.identifierNumber}
                </Form.Control.Feedback>
              </Form.Group>

            </Row>
            <Form.Group
              controlId="validationFormik105"
              className="position-relative"
            >
              <Button type="submit" onSubmit={handleSubmit} style={{width:"50%"}}>Register</Button>
            </Form.Group>



          </Form>
        )}
      </Formik>
    </div>
  )
}
