import React from 'react';

import {Button, FormGroup, FormLabel} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik,Form, Field, ErrorMessage } from 'formik';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
});


export default function LoginPage() {

  const initialValues = { email: "", password: "" }
  const schema = yup.object().shape({
    email: yup.string().required("Email required."),
    password: yup.string().required("Password required."),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}

        onSubmit={(values)=>{
          console.log(values)
        }}
      >
        <Form >
          <FormGroup className="mb-3"><Field name="email" placeholder="Email"></Field>
          <ErrorMessage name="email" render={error=>
            <FormLabel color='red'>{error}</FormLabel>
          }></ErrorMessage>
          </FormGroup>
          <FormGroup><Field name="password" placeholder="password"></Field>
          </FormGroup>
          <FormGroup><Button type='submit'>Login</Button>
          </FormGroup>

        </Form>

      </Formik>
    </div>
  )
}
