import React from 'react'
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';

const NewItem = (props) => {
  return(
    <Row>
      <Col md={4}>
        <Thumbnail src={props.image_url} />
      </Col>
      <Col md={8}>
        <h4>{props.title}</h4>
        <p> {props.description}</p>
        <a href={props.url} target="_blank">Click here to read the full article</a>
      </Col>
    </Row>
  )
}

export default NewItem;
