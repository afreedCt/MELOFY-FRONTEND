import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { deleteVideoAPI, saveHistoryAPI } from "../service/allAPI";
import { toast } from "react-toastify";

const VideoCard = ({ item, setDeleteVideoRes,insideCategory}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  // function for open modal and save history to backend
  const handleShow = async () => {
    const { caption, youtubeUrl } = item;
    const localTime = new Date();
    // data to pass to api
    const historyData = {
      caption: caption,
      youtubeUrl: youtubeUrl,
      dateAndTime: localTime.toLocaleString(),
    };

    setShow(true);
    try {
      let res = await saveHistoryAPI(historyData);
    } catch (error) {
      console.log("error to save history api",error);
    }
  };

  const handleDelete = async (item) => {
    try {
      let res = await deleteVideoAPI(item?.id);
      if (res.request.status >= 200 && res.request.status < 300) {
        console.log("result", res);

        toast.success(`${item?.caption} deleted successfully`);
        setDeleteVideoRes(res);
      }
    } catch (error) {
      console.log("error to delete video", error);
    }
  };
  const dragStarted=(e,videoDetails)=>{
    e.dataTransfer.setData('video',JSON.stringify(videoDetails))
  }
  return (
    <>
    <div className="d-flex justify-content-center align-items-center ">
      <Card
        draggable={true}
        onDragStart={(e)=>dragStarted(e,item)}
        className="mb-4 rounded-2 video-active"
        style={{ cursor: "pointer", width: "190px", minHeight: "290px" }}
      >
        <Card.Img
          onClick={handleShow}
          variant="top"
          src={item?.imageUrl}
          className="w-100 object-fit"
          height={180}
        />
        <Card.Body className="d-flex justify-content-between align-items-center ">
          <Card.Title onClick={handleShow} className="fw-bold" style={{maxWidth:'90px'}}>
            {item?.caption}
          </Card.Title>
        {  !insideCategory&& <Button variant="" >
             <i
              onClick={() => handleDelete(item)}
              className="fa-solid fa-trash text-danger video-del "
            ></i>
          </Button>}
        </Card.Body>
      </Card>

      <Modal   size="lg" show={show} onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title className="fw-bold">{item?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            className="w-100 rounded"
            height="315"
            src={item?.youtubeUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="modal-btn" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
};

export default VideoCard;
