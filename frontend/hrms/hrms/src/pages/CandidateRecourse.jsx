import React, { useState } from 'react'
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { Button, Image } from 'react-bootstrap';
import { toast } from 'react-toastify';
import CandidateRecourseService from '../services/candidateRecourseService';
import EmployerRecourseService from '../services/employerRecourseService';
import { useNavigate } from 'react-router';
import Modal from 'react-bootstrap/Modal';


let candidateRecourseService = new CandidateRecourseService;
let employerRecourseService = new EmployerRecourseService;

export default function CandidateRecourse() {

  const { user } = useSelector(state => state)
  const [recourse, setrecourse] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let navigate = useNavigate();
  useEffect(() => {
    candidateRecourseService.getByCandidateId(user.userItems.id).then(response => {
      setrecourse(response.data.data)

      console.log(response.data.data)

    }
)
  }, [])


  function handleRecourse(recourse) {
    recourse.status="İptal Edildi"
   candidateRecourseService.update(recourse)
   employerRecourseService.update(recourse)
   window.location.reload()
  }

  function handleControl(recourse) {
    recourse.status == "İnceleniyor"?handleShow():handleDelete(recourse)
  }

  function handleDelete(recourse) {
    candidateRecourseService.delete(recourse.id).then(response => {
      recourse.status="İptal Edildi"
      console.log(recourse)
      employerRecourseService.update(recourse)
      toast.success(response.data.message)
      window.location.reload()
    })
  }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Position</th>
            <th>Job Description</th>
            <th>Company Name</th>
            <th>Company Email</th>
            <th>Recourse Status</th>
          </tr>
        </thead>
        <tbody>
          {recourse.map(recourse => (
            <tr key={recourse.id}>
              <td>{recourse.advertRecourse.position}</td>
              <td>{recourse.advertRecourse.jobDescription}</td>
              <td>{recourse.employerRecourse.companyName}</td>
              <td>{recourse.employerRecourse.email}</td>
              <td>{recourse.status}</td>
              <td><Button variant='outline-danger' onClick={() => handleRecourse(recourse)}>İptal et</Button></td>
              <td><Button variant='outline-danger' onClick={() => handleControl(recourse)}><Image style={{ width: "1em" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFowBWSZZwy1QjxuwEG-GZE5cp_WRmKiiLGw&usqp=CAU" /></Button></td>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Uyarı!!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bu başvurunuz henüz incelenmedi ya da iptal edilmedi. İptal edip kaldırmak istiyor musunuz?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    İptal
                  </Button>
                  <Button variant="outline-danger" onClick={()=>handleDelete(recourse)}>
                    İptal et ve kaldır
                  </Button>
                </Modal.Footer>
              </Modal>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  )
}
