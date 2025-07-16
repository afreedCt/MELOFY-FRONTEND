import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const VideoCard = ({ item }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <Card
        onClick={handleShow}
        className="mb-4 rounded-2 video-active"
        style={{ cursor: "pointer", width: "190px",minHeight:"270px"}}
      >
        <Card.Img
          variant="top"
          src={item.imgaeUrl}
          className="w-100 object-fit"
          height={180}
        />
        <Card.Body className="d-flex justify-content-between align-items-center ">
          <Card.Title>{item.caption}</Card.Title>
          <Button variant="">
            <i className="fa-solid fa-trash text-danger video-del"></i>
          </Button>
        </Card.Body>
      </Card>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>item.caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            className="w-100 rounded"
            height="315"
            src={item.youtubeUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
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
