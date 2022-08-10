import React from 'react';
import * as Yup from "yup";
import Card from 'react-bootstrap/Card';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'react-bootstrap/Button';
import Formm from 'react-bootstrap/Form';

export default function LoginPage() {
    return (
        <div>
            <Card style={{ width: "50em", margin: "auto", marginTop: "10em" }}>
                <Card.Body>

                    <div>

                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Required email';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                if (!values.password) {
                                    errors.password = 'Required password';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form onSubmit={handleSubmit}>
                                          <Formm.Label style={{marginTop:"3em"}}>Email</Formm.Label>
                                    <Formm.Control
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                   
                                   />

                                    {errors.email && touched.email && errors.email}
                                    <br></br>
                                    <Formm.Label style={{marginTop:"3em"}} htmlFor="inputPassword5">Password</Formm.Label>
                                    <Formm.Control
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        style={{marginBottom:"3em"}}

                                    />

                                    {errors.password && touched.password && errors.password}
                                    <br></br>

                                    <div className="d-grid gap-2">
                                        <Button variant="primary" size="lg" type="submit" disabled={isSubmitting}>Giriş Yap</Button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>

                </Card.Body>
            </Card>

        </div>
    )
}
