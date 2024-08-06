import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Personcard = ({elm}) => {
  return (
    <div className="">
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Person Information</Card.Title>
        <Card.Text>
         Name:{elm.name}
         username:{elm.username}
         email:{elm.email}
        </Card.Text>
      </Card.Body>
    </Card>
  

    </div>
  )
}

export default Personcard