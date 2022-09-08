import React, { useState, useEffect } from 'react'
import * as yup from 'yup';
import { Formik, Field } from 'formik';
import Form from 'react-bootstrap/Form';
import { Button, Col, Row } from 'react-bootstrap';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import KodlamaInputText from '../utilities/customFormControls/KodlamaInputText';
import CategoryService from '../services/categoryService';


import InputGroup from 'react-bootstrap/InputGroup';

const schema = yup.object().shape({
  projectName: yup.string().required(),
  unitPrice: yup.number().required(),
  unitsInStock: yup.number().required(),
  quantityPerUnit: yup.string().required(),
  /* category: yup.object().shape({
     categoryId: yup.number().required(),
     categoryName: yup.string().required(),
   })*/

});
const initialValues={
  projectName: '',
  unitPrice: '',
  unitsInStock: '',
  quantityPerUnit: '',
  category: {
    categoryId: 0,
    categoryName: '',
  }
}

export default function ProductAdd() {

  const [categories, setCategories] = useState([])
  var i=1;


  useEffect(() => {
    let categoryService = new CategoryService
    categoryService.getAll().then(result => setCategories(result.data.data))
  }, [])


  return (
    <div>
      <Formik
        enableReinitialize={true}
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={initialValues}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          value,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>

            <Form.Group

              className="position-relative"
            >
              <Form.Label>projectName</Form.Label>
              <Form.Control
                type="text"
                name="projectName"
                value={values.projectName}
                onChange={handleChange}
                isValid={touched.projectName && !errors.projectName}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group

              className="position-relative"
            >
              <Form.Label>unitPrice</Form.Label>
              <Form.Control
                type="number"
                name="unitPrice"
                value={values.unitPrice}
                onChange={handleChange}
                isValid={touched.unitPrice && !errors.unitPrice}
              />

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>unitsInStock</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="number"
                  placeholder="unitsInStock"
                  name="unitsInStock"
                  value={values.unitsInStock}
                  onChange={handleChange}
                  isInvalid={!!errors.unitsInStock}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.unitsInStock}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group
              className="position-relative"
            >
              <Form.Label>quantityPerUnit</Form.Label>
              <Form.Control
                type="text"
                placeholder="quantityPerUnit"
                name="quantityPerUnit"
                value={values.quantityPerUnit}
                onChange={handleChange}
                isInvalid={!!errors.quantityPerUnit}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.quantityPerUnit}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="position-relative"
            >
              
              <Form.Label onChange={handleChange} name="categoryId">Category</Form.Label>
            <Row>
              <Col sm="1">{i}</Col>
              <Col sm="11">
              <Form.Select
                type="object"
                placeholder="Category"
                name="category"
                onChange={handleChange}
                onSubmit={console.log(categories)}
              >
                {
                  categories.map((categories) => (
                      <option key={categories.categoryId}> {categories.categoryName}</option>
                  ))
                }
              </Form.Select>
              </Col>
              </Row>
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        )}
      </Formik>

    </div>
  )
}
