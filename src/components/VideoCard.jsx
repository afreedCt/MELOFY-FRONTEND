import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const VideoCard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex justify-content-center align-items-center ">
    <Card onClick={handleShow} className="mb-4 rounded-2" style={{cursor:"pointer"}}>
        <Card.Img
          variant="top"
          src="https://tse1.mm.bing.net/th/id/OIP.lI2Rqu9VqiBvaLIalJblMwHaK1?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          className="w-100 object-fit"
          height={180}
        />
        <Card.Body className="d-flex justify-content-between align-items-center ">
          <Card.Title>kaduva</Card.Title>
          <Button variant="">
            <i className="fa-solid fa-trash text-danger"></i>
          </Button>
        </Card.Body>
      </Card>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>kaduva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe className="w-100 rounded" height="315" src="https://www.youtube.com/embed/izbydia9jz4?si=LJO2lDuCSJMrPPcw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default VideoCard;
