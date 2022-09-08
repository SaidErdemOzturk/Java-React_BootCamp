import React, { useEffect, useState } from 'react'
import {FormControl, FormLabel, FormGroup,Button,FormCheck, ButtonGroup} from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik, Field, Form, useFormik } from 'formik';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import AdvertService from '../services/advertService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import CustomWidget from '../utilities/customLayouts/customWidget';





const validationSchema = yup.object().shape({
    title: yup.string().required(),
    position: yup.string().required(),
    jobDescription: yup.string().required(),
    city: yup.string().required(),
    minWage: yup.number().required('required minwage'),
    maxWage: yup.number().required('required maxwage'),
    open_position_count: yup.number().required('required maxwage'),
    deadline: yup.string().required(),
    startingDate: yup.string().required(),
  
  });
  
  
  const initialValues = {
    title: '',
    position: '',
    jobDescription: '',
    city: '',
    minWage: '',
    maxWage: '',
    open_position_count: '',
    deadline: '',
    startingDate: '',
  }

  let advertService = new AdvertService;


export default function AdvertsAdd() {

  const {user} = useSelector(state=>state);
  const [selectedImage, setSelectedImage] = useState("")  
  const [select, setselect] = useState(false)

  function handleCheckbox(){
    if(select){
      setselect(false)
    }else{
    setselect(true)
    }
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
            setSelectedImage(result.info.url)
            console.log(selectedImage)
          }

        }
      }
    )
    myWidget.open();
    
  }








  let navigate = useNavigate()
  
  const onSubmit = values =>{
    if(select){
      values.imageUrl=selectedImage
      console.log(user)
      values.employer=user.userItems
      advertService.add(values).then(response=>{
        if(response.data.success){
          toast.success(response.data.message)
          navigate("/employer/homepage")
        }else{
          toast.error(response.data.message)
        }
      })
    }else{
      toast.error("Okuyup kabul edin.")
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
            style={{width:"50%", margin:"auto"}}
            md="6"
            className="position-relative"
          >
            <FormLabel>Başlık</FormLabel>
            <FormControl
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.title && !formik.errors.title}
              isInvalid={formik.touched.title && formik.errors.title}
              
            />
            {formik.touched.title && formik.errors.title ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.title}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
          </FormGroup>
         
        </Row>
        <FormGroup
            as={Col}
            style={{width:"50%", margin:"auto"}}
            className="position-relative"
            
          >
            <FormLabel>Pozisyon</FormLabel>
            <FormControl
              type="text"
              name="position"
              value={formik.values.position}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.position && !formik.errors.position}
              isInvalid={formik.touched.position && formik.errors.position}
            />
            {formik.touched.position && formik.errors.position ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.position}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
           
           
          </FormGroup>
          <Row className="mb-6">
          <FormGroup
            as={Col}
            style={{width:"50%", margin:"auto"}}
            md="6"
            className="position-relative"
          >
            <FormLabel>iş Açıklaması</FormLabel>
            <FormControl
              type="text"
              name="jobDescription"
              value={formik.values.jobDescription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.jobDescription && !formik.errors.jobDescription}
              isInvalid={formik.touched.jobDescription && formik.errors.jobDescription}
              
            />
            {formik.touched.jobDescription && formik.errors.jobDescription ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.jobDescription}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
          </FormGroup>
         
        </Row>
        <Row className="mb-6">
          <FormGroup
            as={Col}
            style={{width:"50%", margin:"auto"}}
            md="6"
            className="position-relative"
          >
            <FormLabel>Şehir</FormLabel>
            <FormControl
              type="text"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.city && !formik.errors.city}
              isInvalid={formik.touched.city && formik.errors.city}
              
            />
            {formik.touched.city && formik.errors.city ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.city}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
          </FormGroup>
         
        </Row>

        <Row className="mb-6">
          <FormGroup
            as={Col}
            style={{width:"50%", margin:"auto"}}
            md="6"
            className="position-relative"
          >
            <FormLabel>En düşük ücret</FormLabel>
            <FormControl
              type="number"
              name="minWage"
              value={formik.values.minWage}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.minWage && !formik.errors.minWage}
              isInvalid={formik.touched.minWage && formik.errors.minWage}
              
            />
            {formik.touched.minWage && formik.errors.minWage ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.minWage}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
          </FormGroup>
         
        </Row>

        <Row className="mb-6">
          <FormGroup
            as={Col}
            style={{width:"50%", margin:"auto"}}
            md="6"
            className="position-relative"
          >
            <FormLabel>En yüksek ücret</FormLabel>
            <FormControl
              type="number"
              name="maxWage"
              value={formik.values.maxWage}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.maxWage && !formik.errors.maxWage}
              isInvalid={formik.touched.maxWage && formik.errors.maxWage}
              
            />
            {formik.touched.maxWage && formik.errors.maxWage ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.maxWage}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
          </FormGroup>
         
        </Row>
        <Row className="mb-6">
          <FormGroup
            as={Col}
            style={{width:"50%", margin:"auto"}}
            md="6"
            className="position-relative"
          >
            <FormLabel>Açık posizyon sayısı</FormLabel>
            <FormControl
              type="number"
              name="open_position_count"
              value={formik.values.open_position_count}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.open_position_count && !formik.errors.open_position_count}
              isInvalid={formik.touched.open_position_count && formik.errors.open_position_count}
              
            />
            {formik.touched.open_position_count && formik.errors.open_position_count ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.open_position_count}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
          </FormGroup>
         
        </Row>



        <Row className="mb-6">
          <FormGroup
            as={Col}
            style={{width:"50%", margin:"auto"}}
            md="6"
            className="position-relative"
          >

              <FormLabel>Select Date</FormLabel>
              <FormControl type="date" name="deadline" 
              value={formik.values.deadline} 
               onChange={formik.handleChange} 
               isValid={formik.touched.deadline && !formik.errors.deadline}
               isInvalid={formik.touched.deadline && formik.errors.deadline}
              onBlur={formik.handleBlur}

               placeholder="Deadline" />
           {formik.touched.deadline && formik.errors.deadline ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.deadline}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
           
            </FormGroup>
         
        </Row>


        <Row className="mb-6">
        <FormGroup
            as={Col}
            style={{width:"50%", margin:"auto"}}
            md="6"
            className="position-relative"
          >

              <FormLabel>Select Date</FormLabel>
              <FormControl type="date" name="startingDate" 
              value={formik.values.startingDate} 
              onChange={formik.handleChange} 
               isValid={formik.touched.startingDate && !formik.errors.startingDate}
               isInvalid={formik.touched.startingDate && formik.errors.startingDate}
              onBlur={formik.handleBlur}/>
           {formik.touched.startingDate && formik.errors.startingDate ? <FormControl.Feedback type="invalid" tooltip> {formik.errors.startingDate}</FormControl.Feedback>: <FormControl.Feedback tooltip>Looks good!</FormControl.Feedback>}
           
            </FormGroup>
         
        </Row>

        <Button onClick={()=>handleOpenWidget()}> Resim seç</Button>
        

        <FormGroup
          className="position-relative"
        >
          <br></br>
          <Row style={{width:"40%",margin:"auto"}}>
            <Col  >
          <FormCheck aria-label="option 3" onClick={()=>handleCheckbox()} label="Okudum kabul ediyorum"/>
          <Button type="submit" style={{width:"100%"}}>İlan ekle</Button>
          </Col>
          </Row>
        </FormGroup>

      </form>



      
    </div>
  )
}
