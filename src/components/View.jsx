import React from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'

const View = () => {
  return (
    <>
    <Row>
      <Col lg={4} md={6} sm={12}>
      <VideoCard/>
      </Col>
      <Col lg={4} md={6} sm={12}>
      <VideoCard/>
      </Col>
      <Col lg={4} md={6} sm={12}>
      <VideoCard/>
      </Col>
      <Col lg={4} md={6} sm={12}>
      <VideoCard/>
      </Col>
    </Row>
    
    </>
  )
}

export default View