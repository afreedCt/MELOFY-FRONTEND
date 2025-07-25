import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {
  addCategoryAPI,
  deleteCatgoryAPI,
  deleteVideoAPI,
  getAllCategoryDataAPI,
  updateCategoryAPI,
} from "../service/allAPI";
import { toast } from "react-toastify";
import { Col, Row } from "react-bootstrap";
import VideoCard from "./VideoCard";

const Category = ({ setDeleteCategoryRes ,deleteCategoryRes}) => {
  const [categoryData, setCategoryData] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [allCategoryData, setAllCategoryData] = useState([]);
  // console.log(allCategoryData);

  useEffect(() => {
    getCategoryData();
  }, [deleteCategoryRes]);

  const getCategoryData = async () => {
    try {
      const res = await getAllCategoryDataAPI();
      // console.log(res);
      setAllCategoryData(res.data);
    } catch (error) {
      console.log(res);
    }
  };

  const handleAdd = async () => {
    if (categoryData && categoryData.trim() !== "") {
      try {
        const res = await addCategoryAPI({ name: categoryData, videos: [] });
        console.log(res);
        if (res.status >= 200 && res.status < 300) {
          getCategoryData();
          toast.success(`${categoryData} added successfully to category`);
          handleClose();
        }
      } catch (error) {
        console.log("error to add category ", error);
      }
    } else {
      toast.error("field must be filled");
    }
  };

  const handleDelete = async (item) => {
    try {
      const result = await deleteCatgoryAPI(item.id);
      if (result.status >= 200 && result.status < 300) {
        getCategoryData();
        toast.success(`${item.name} is deleted successfullly`);
      }
    } catch (error) {
      console.log("error to delete category", error);
    }
  };

  const handleVideoDrop = async (e, categoryItem) => {
    const video = JSON.parse(e.dataTransfer.getData("video"));
    for(let eachVideo of categoryItem.videos){
      if(eachVideo.id===video.id){
        toast.info(`${video.caption} already exist in ${categoryItem.name} (category)`)
        return;
      }
    }
    categoryItem.videos.push(video);

    try {
      const res = await updateCategoryAPI(categoryItem?.id, categoryItem);
      // console.log(res);
      if (res.status >= 200 && res.status < 300) {
        toast.success(`${video.caption} added to ${categoryItem.name} (category)`);
        getCategoryData();
        const delRes = await deleteVideoAPI(video?.id);
        console.log(delRes);
        setDeleteCategoryRes(delRes);
      }
    } catch (error) {
      console.log("error to update category video ", error);
    }
  };

  // function for pass the dragged data
  const dragStarted=(e,catData,videoData)=>{
    console.log(catData,videoData);
    e.dataTransfer.setData('video',JSON.stringify(videoData))
    e.dataTransfer.setData('catData',JSON.stringify(catData))
    
  }

  return (
    <div>
      <div className="d-flex justify-content-around align-items-center ">
        <h3
          className="fw-bold my-4 mx-md-4 text-center text-md-start"
          style={{ color: "blueviolet" }}
        >
          All Category
        </h3>
        <i
          className="fs-4 p-2 fa-solid fa-plus rounded-circle border border-2 border-white ms-2 cursor-pointer shadow category-add-btn"
          style={{ cursor: "pointer" }}
          onClick={handleShow}
        ></i>
      </div>
        <hr className="ms-2 mb-2"/>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter category name"
            className="mb-3"
          >
            <Form.Control
              onChange={(e) => setCategoryData(e.target.value)}
              type="text"
              placeholder="Enter category name.."
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="category-section ">
        {allCategoryData.length > 0 ? (
          allCategoryData.map((cat) => (
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleVideoDrop(e, cat)}
              key={cat.id}
              className="category-item shadow mb-3 border border-top-2"
            >
              <div className="d-flex justify-content-between align-items-center w-100 p-3 ">
                <h2 className="fw-bold">{cat.name}</h2>
                <i
                  onClick={() => handleDelete(cat)}
                  className="fa-solid fa-trash text-danger video-del fs-4 "
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <Row>
                {cat.videos.length > 0 &&
                  cat.videos.map((item) => (
                    <Col
                      draggable={true}
                      onDragStart={(e) => dragStarted(e,cat, item)}
                      key={item.id + item.caption}
                      lg={4}
                      md={6}
                      sm={12}
                    >
                      <VideoCard item={item} insideCategory={true} />
                    </Col>
                  ))}
              </Row>
            </div>
          ))
        ) : (
          <div>
            <h2 className="fw-bold text-danger">No items found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
