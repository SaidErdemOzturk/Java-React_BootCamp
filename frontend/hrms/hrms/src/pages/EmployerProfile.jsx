import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux/es/exports';

export default function EmployerProfile() {
    const {user} = useSelector(state=>state)
  return (
    <div>
                  {
            console.log(user)
          }
        
        <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>Şirket adı: : {user.userItems.companyName}</Card.Text>
        <Card.Text>web siteniz : {user.userItems.webSite}</Card.Text>
        <Card.Text>Email : {user.userItems.email}</Card.Text>
        <Card.Text>Password : {user.userItems.password}</Card.Text>
        <Card.Text>Telefon numaranız : {user.userItems.phoneNumber}</Card.Text>
        <Card.Text>Profil resminiz : {<Card.Img style={{width:"10%"}} src={user.userItems.imageUrl}></Card.Img>}</Card.Text>
        
        <Button variant="primary" href="/employer/updateprofile">Bilgilerini Güncelle</Button>
      </Card.Body>
    </Card>

    <Card style={{marginTop:"2em"}}>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Kariyer bilgileriniz</Card.Title>
        <Card.Text>Cv : {user.userItems.firstName}</Card.Text>
        <Card.Text>Soyadınız : {user.userItems.lastName}</Card.Text>
        <Card.Text>Email : {user.userItems.email}</Card.Text>
        <Card.Text>Password : {user.userItems.password}</Card.Text>
        <Card.Text>Tc Kimlik numaranız : {user.userItems.identifierNumber}</Card.Text>
        <Card.Text>Doğum gününüz : {user.userItems.birthDay}</Card.Text>
        
        <Button variant="primary" href="/candidate/updateprofile">Bilgilerini Güncelle</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
