import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';

export default function UserList() {

    const [users, setusers] = useState([])



    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }

  return (
  <div>

<Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Üye adı</th>
          <th>Üye email'i</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
      </tbody>
    </Table>


    <br></br>
    <Pagination>{items}<Pagination.Next/></Pagination>
    
  </div>
  )
}
