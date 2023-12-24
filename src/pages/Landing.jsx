import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Landing() {
  return (
    <>
      <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100'>
      <Row>
        <Col>
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p className='mt-3 mb-3' style={{textAlign:"justify"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero culpa, quaerat nam dolorum reprehenderit accusantium, sapiente repudiandae voluptatem quia cupiditate qui dolores, aperiam odit illum distinctio rerum? Rerum, soluta quis?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta magni voluptates repellat reiciendis tempora eius odit in voluptatibus! Necessitatibus nobis voluptatem ipsum sint commodi vero porro a delectus eaque veniam.</p>
        <button className='btn btn-warning mt-5'>Get Started <i class="fa-solid fa-arrow-right ms"></i></button>
        </Col>
        <Col>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" style={{height:"400px"}} className='ms-5' />
        </Col>
      </Row>
    </Container>
    <div className='container  mb-5'>
      <h3>Features</h3>
      <div className='cards d-flex align-items-center justify-content-evenly mt-5'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
    <div className="container mb-5 mt-5 border border-2 border-secondary rounded">
      <Row>
        <Col>
          <h3 className='text-warning mt-5 mb-5'>Simple and Powerfull</h3>
        </Col>
        <Col></Col>

      </Row>
    </div>
    </>
  )
}

export default Landing