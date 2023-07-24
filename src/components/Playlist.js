import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

import projectData from './data';


const Playlist = () => {
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpin(false)
    }, 1500)
  })

  const btn_design = {
    padding: '0px 63px',
  }
  return (
    <div>
      {
        spin ? <div className='d-flex justify-content-center align-items-center' style={{ height: '85vh' }}>
          <Spinner animation="border" variant="danger" /> &nbsp; Loading...
        </div> : <div className="container">
          <h2 className='text-center mt-2'>Projects</h2>
          <div className="card">
            <div className="row d-flex justify-content-around align-items-center">
              {
                projectData.map((ele, index) => {
                  return (
                    <>
                      <Card style={{ width: '18rem' }} className='mt-4 mb-4'>
                        <Card.Img variant="top" style={{ width: '18rem', height: '10rem', marginLeft: -13 }} src={ele.imgsrc} />
                        <Card.Body className='text-center'>
                          <Card.Title>{ele.title}</Card.Title>
                          <Button variant="primary">
                            <a href={ele.link} target='_blank' className='text-decoration-none mt-1' style={{ padding: '0px 63px', color: 'white' }}>Live Demo</a>
                          </Button>
                        </Card.Body>
                      </Card>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Playlist
