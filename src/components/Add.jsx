import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

const Add = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setIsInvalidUrl(false);
    setVideoDetails({
      caption: "",
      imgaeUrl: "",
      youtubeUrl: "",
    });
  };
  const handleShow = () => setShow(true);
  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    imgaeUrl: "",
    youtubeUrl: "",
  });

  const [isInvalidUrl, setIsInvalidUrl] = useState(false);
  console.log("videodetails", videoDetails);

  const getEmbededUrl = (url) => {
    if (url.includes("v=")) {
      setIsInvalidUrl(false);
      let videoId = url.split("v=")[1].slice(0, 11);
      setVideoDetails({
        ...videoDetails,
        youtubeUrl: `https://www.youtube.com/embed/${videoId}`,
      });
    } else {
      setVideoDetails({ ...videoDetails, youtubeUrl: "" });
      setIsInvalidUrl(true);
    }
  };

  // handle add button (form submition)
  const handleUpload = () => {
    const { caption, imgaeUrl, youtubeUrl } = videoDetails;
    if (caption && imgaeUrl && youtubeUrl) {
      // api
    } else {
      console.log("calling");
      toast.info("enter the fields ");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-around mt-4 flex-column flex-md-row">
        <h1 className="btn mt-2 rounded-2 shadow" style={{backgroundColor:"blueviolet",color:"white" }} onClick={handleShow}>
          Upload New Video{" "}
          <i className="p-2 fa-solid fa-plus  rounded-circle border border-2 border-white ms-2 cursor-pointer"></i>
        </h1>
        <Link to={"/history"} className="text-decoration-none  ">
          <h1 style={{border:"2px solid blueviolet"}} className="history-btn shadow fs-4 mt-2 p-2 rounded-2 d-flex justify-content-center align-items-center cursor-pointer">
            watch History
          </h1>
        </Link>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-danger fw-bold">
            <h3>Video details!!!</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="fs-6">please fill the following fields...</h5>
          <div className="border border-2 p-3">
            {/* <input type="text" placeholder="video caption" /> */}
            <FloatingLabel
              controlId="floatingInput"
              label="video caption"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="enter your caption"
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, caption: e.target.value })
                }
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="image url"
              className="mb-3"
            >
              <Form.Control
                type="link"
                placeholder="image url"
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, imgaeUrl: e.target.value })
                }
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="youtube url"
              className="mb-"
            >
              <Form.Control
                type="link"
                placeholder="youtube url"
                onChange={(e) => getEmbededUrl(e.target.value)}
              />
            </FloatingLabel>
            {isInvalidUrl && (
              <p className="text-danger m-2">invalid youtube url</p>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
