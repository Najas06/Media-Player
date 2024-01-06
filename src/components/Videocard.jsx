import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Videocard() {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height="250px" width="250px" src="https://i.scdn.co/image/ab67616d0000b273a7c10595167c713a2df0f187" />
      <Card.Body>
        <div className="d-flex align-items-center justify-content-evenly">
          <h6>Video Caption</h6>
          <Button variant="danger" className='ms-5'>
            <i class="fa-solid fa-trash"></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
    </>
  )
}

export default Videocard