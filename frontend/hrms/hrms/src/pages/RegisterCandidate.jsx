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
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  identifierNumber: yup.string().required(),
  dob: yup.string().required(),


});


const onSubmit = (values) => {
  console.log(values);
  let candidateService = new CandidateService();
  candidateService.add(values);
};



export default function RegisterCandidate() {
  const [post, setPost] = useState({})
  function createPost(values) {
   
    let candidateService = new CandidateService();
    candidateService
      .add(values)
  }

  const handleOnSubmit=(values)=>{
    setPost(values); 
    try{
      
      createPost(values);
    }catch(error) {
      console.log('Error...')
     }
  }

  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={handleOnSubmit}
        initialValues={{
          firstName: 'Mark',
          lastName: 'Otto',
          email: 'a@a.com',
          password: 'a',
          identifierNumber: 'a',
          dob: '25.10.2010',
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
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationFormik102"
                className="position-relative"
              >
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
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
                md="8"
                controlId="validationFormik105"
                className="position-relative"
              >
                <Form.Label>Identifier Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="IdentifierNumber"
                  name="identifierNumber"
                  value={values.identifierNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.identifierNumber}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.identifierNumber}
                </Form.Control.Feedback>
              </Form.Group>



              <div className="col-md-4">
                <Form.Group controlId="dob">
                  <Form.Label>Select Date</Form.Label>
                  <Form.Control type="date" name="dob" value={values.dob} onChange={handleChange} placeholder="Date of Birth" />
                </Form.Group>
              </div>



            </Row>
            <Form.Group
              controlId="validationFormik105"
              className="position-relative"
            >
              <Button type="submit" onSubmit={handleSubmit} style={{width:"50%"}}>Kayıt Ol</Button>
            </Form.Group>



          </Form>
        )}
      </Formik>
    </div>
  )
}
