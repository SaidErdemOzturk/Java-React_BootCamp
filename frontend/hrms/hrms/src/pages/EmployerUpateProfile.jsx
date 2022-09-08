import React, { useState } from 'react'
import * as yup from 'yup';
import {  useFormik } from 'formik';
import EmployerService from '../services/employerService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormGroup, FormLabel, FormControl,Button, Image } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../store/actions/userActions';
import UserService from '../services/userService';





let employerService = new EmployerService;
let userService= new UserService;



export default function EmployerUpdateProfile() {

    let dispatch = useDispatch();
    const {user} = useSelector(state=>state)
    const [selectedImage, setSelectedImage] = useState("")  

    const validationSchema = yup.object().shape({
      companyName: yup.string().required('Required first name'),
      webSite: yup.string().required('Required last webSite'),
      phoneNumber: yup.string().required('Required phoneNumber'),
      password: yup.string().required('Required password'),
      email: yup.string().required('Required identifier email'),
    });
    const initialValues = {
      companyName: user.userItems.companyName,
      webSite: user.userItems.webSite,
      email: user.userItems.email,
      password: user.userItems.password,
      phoneNumber: user.userItems.phoneNumber,
    }

    function handleOpenWidget(){
      
      var myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'daidoerdem', 
        uploadPreset: 'react_upload'}, (error, result) => { 
          if (!error && result && result.event === "success") { 
            if(result.info.resource_type!="image"){
              error="Resim dışında bir şey seçmeyiniz";
            }else{
              console.log('Done! Here is the image info: ', result.info); 
              if(result.info.url!=""){
                setSelectedImage(result.info.url)
                console.log(result.info.url)
                console.log(typeof(result.info.url))
                console.log(selectedImage)
                user.userItems.imageUrl=selectedImage
                console.log(user.userItems.imageUrl)

              }
            }
  
          }
        }
      )
      myWidget.open();
      
    }
    function handleRefreshImage(){

    }
  

    const onSubmit = values =>{
        values.id=user.userItems.id
        values.userType=user.userItems.userType
        values.imageUrl=user.userItems.imageUrl
        if(values.email==user.userItems.email){
          
          employerService.update(values).then(response =>{
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

              employerService.update(values).then(response =>{
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
            <FormLabel>company Name</FormLabel>
            <FormControl
              type="text"
              name="companyName"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.companyName && !formik.errors.companyName}
              isInvalid={formik.errors.companyName}
            />

            {formik.touched.companyName && formik.errors.companyName ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.companyName}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
          </FormGroup>
          <FormGroup
            as={Col}
            md="6"
            className="position-relative"
          >
            <FormLabel>Web Site</FormLabel>
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
            <FormLabel>Phone Number</FormLabel>
            <FormControl
              type="text"
              name="identifierNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.phoneNumber && !formik.errors.phoneNumber}
              isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />

            {formik.touched.phoneNumber && formik.errors.phoneNumber ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.phoneNumber}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
          </FormGroup>                   
        </Row>

        <Row>
          

            <FormGroup controlId="birthDay" as={Col} md="12">
              {}
              <Image 
              value={formik.values.imageUrl} 
              onChange={formik.handleChange}
               onBlur={formik.handleBlur} 
               style={{width:"10%",margin:"2em"}}
                src={user.userItems.imageUrl}
                />
                
              <Button onClick={()=>handleOpenWidget()}>Resim seç</Button>
           
              <Button onClick={()=>handleRefreshImage()}></Button>
            </FormGroup>

            <FormGroup controlId="birthDay" as={Col}>
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
