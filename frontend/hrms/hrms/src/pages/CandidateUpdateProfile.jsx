import React, { useState } from 'react'
import * as yup from 'yup';
import {  useFormik } from 'formik';
import CandidateService from '../services/candidateService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormGroup, FormLabel, FormControl,Button, Image, Card, Spinner } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../store/actions/userActions';
import UserService from '../services/userService';
import { useEffect } from 'react';
import { render } from 'react-dom';





const candidateService = new CandidateService;
const userService= new UserService;



export default function CandidateUpdateProfile() {

    let dispatch = useDispatch();
    const {user} = useSelector(state=>state)
    useEffect(() => {
      
    }, [])
    

    const validationSchema = yup.object().shape({
      firstName: yup.string().required('Required first name'),
      lastName: yup.string().required('Required last name'),
      email: yup.string().required('Required email'),
      password: yup.string().required('Required password'),
      identifierNumber: yup.string().required('Required identifier number'),
      birthDay: yup.string().required('Required birth day'),
    });
    const initialValues = {
      firstName: user.userItems.firstName,
      lastName: user.userItems.lastName,
      email: user.userItems.email,
      password: user.userItems.password,
      identifierNumber: user.userItems.identifierNumber,
      birthDay: user.userItems.birthDay,
    }
    const [selectedImage, setSelectedImage] = useState("")  


    function handleOpenWidget(){
      var myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'daidoerdem', 
        uploadPreset: 'react_upload'}, (error, result) => { 
          if (!error && result && result.event === "success") { 
            if(result.info.resource_type!="image"){
              error="Resim dışında bir şey seçmeyiniz";
            }else{
              console.log('Done! Here is the image info: ', result.info); 
              setSelectedImage(result.info.url)
              user.userItems.imageUrl=selectedImage
              console.log(selectedImage)
            }
          }
        }
      )
      myWidget.open();
    }
    const onSubmit = values =>{
        values.id=user.userItems.id
        values.userType=user.userItems.userType
        values.imageUrl=user.userItems.imageUrl
        if(values.email==user.userItems.email){
          
          candidateService.update(values).then(response =>{
            if(response.data.success){
              toast.success(response.data.message)
              dispatch(update(values))
            }else{
              toast.error(response.data.message)
            }
          })
        }else{
          userService.checkEmail(values.email).then(response=>{

            if(response.data.success){

              candidateService.update(values).then(response =>{
                if(response.data.success){
                  toast.success(response.data.message)
                  dispatch(update(values))
                }else{
                  toast.error(response.data.message)
                }
              })
            }else{
              toast.error(response.data.message)
            }
          })
        }
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
            md="6"
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
              isInvalid={formik.errors.firstName}
            />

            {formik.touched.firstName && formik.errors.firstName ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.firstName}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
          </FormGroup>
          <FormGroup
            as={Col}
            md="6"
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

        <Row className="mb-6">
          <FormGroup
            as={Col}
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
              isInvalid={formik.errors.email}
            />

            {formik.touched.firstName && formik.errors.email ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.email}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
          </FormGroup>
          <FormGroup
            as={Col}
            md="6"
            className="position-relative"
          >
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.password && !formik.errors.password}
              isInvalid={formik.touched.password && formik.errors.password}
            />
            {formik.touched.password && formik.errors.password ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.password}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
           
           
          </FormGroup>
        </Row>
        <Row className="mb-3">
          
          <FormGroup
            as={Col}
            md="6"
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
             <FormGroup controlId="birthDay" as={Col}
            md="6">
              <FormLabel>Select Date</FormLabel>
              <FormControl type="date" name="birthDay" value={user.userItems.birthDay}  onChange={formik.handleChange} placeholder="Date of Birth" />
           
            </FormGroup>         
           
        </Row>

        <Row>
        
            <FormGroup controlId="birthDay" as={Col} md="12">
            <Button></Button>
            {console.log(formik.values.imageUrl)}
            {
              user.userItems.imageUrl!=""||selectedImage!=""?
              <Image 
              value={formik.values.imageUrl} 
              onChange={formik.handleChange}
               onBlur={formik.handleBlur} 
               style={{width:"10%",margin:"2em"}}
                src={user.userItems.imageUrl}
                />:<Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              

            }
              
                
              <Button type="file" onClick={()=>handleOpenWidget()}>Resim seç</Button>
           
              
            </FormGroup>
            </Row>

        <FormGroup
          className="position-relative"
        >
          <Button type="submit" style={{ width: "50%" }}>Güncelle</Button>
        </FormGroup>

         </form>



    </div>
  )
}
