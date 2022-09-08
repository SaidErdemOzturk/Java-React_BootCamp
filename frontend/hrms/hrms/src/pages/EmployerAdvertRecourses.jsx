import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router'
import EmployerRecourseService from '../services/employerRecourseService'


const employerRecourseService = new EmployerRecourseService;
const candidateRecourseService = new EmployerRecourseService;

export default function EmployerAdvertRecourses() {
    let { id } = useParams()
    const [recourse, setrecourse] = useState([])
    useEffect(() => {
        employerRecourseService.getByAdvertId(id).then(response => (
            setrecourse(response.data.data)
        ))
    }, [])

    function handleAgree(recourse){
        recourse.status= "Kabul Edildi"
        employerRecourseService.update(recourse)
        candidateRecourseService.update(recourse)
    }

    function handleDecline(recourse){
        
    }

    return (

        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Tilte</th>
                    <th>Open position Count</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    recourse.length == 0 ? <tr><td colSpan={4}>Henüz bir başvuru yapılmadı</td></tr>
                        : recourse.map(recourse => (
                            <tr>
                                <td>{recourse.candidateRecourse.firstName}</td>
                                <td>{recourse.candidateRecourse.lastName}</td>
                                <td>{recourse.candidateRecourse.email}</td>
                                <td>{recourse.advertRecourse.title}</td>
                                <td>{recourse.advertRecourse.open_position_count}</td>
                                <td>{<Button variant='outline-success' onClick={()=>handleAgree(recourse)}>Kabul Et</Button>}</td>
                                <td>{<Button variant='outline-danger' onClick={()=>handleDecline(recourse)}>Reddet</Button>}</td>
                            
                            
                            </tr>
                        ))
                }
            </tbody>
        </Table>
    )
}
