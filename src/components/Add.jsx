import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button className='btn' onClick={handleShow}><i class="fa-solid fa-cloud-arrow-up fs-5 " style={{color:"white"}}></i></button>
    </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
          <i class="fa-solid fa-film text-warning me-3"></i>
          Upload Video
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the Form</p>
          <Form className='border border-secondary p-3 rounded'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Control type="text" placeholder="Enter Video ID" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Caption" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video Image url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Control type="text" placeholder="Enter Youtube Video Link" />
             </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn btn-warning' variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default Add