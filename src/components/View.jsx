import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import VideoCard from "./VideoCard";
import { addVideoAPI, deleteCatgoryAPI, getAllVideoAPI, updateCategoryAPI } from "../service/allAPI";
import { toast } from "react-toastify";

const View = ({ addVideoRes , deleteCategoryRes,setDeleteCategoryRes}) => {
  const [allVideos, setAllVideos] = useState([]);
  const [deleteVideoRes,setDeleteVideoRes]=useState({})
  // calling when uploads or delete a new video
  useEffect(() => {
    getAllVideos(); 
  }, [addVideoRes,deleteVideoRes,deleteCategoryRes]);

  // function for get all videos api
  const getAllVideos = async () => {
    try {
      let res = await getAllVideoAPI();
      if (res.status >= 200 && res.status < 300) {
        setAllVideos(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleVideoDrop=async(e)=>{
    const video=JSON.parse(e.dataTransfer.getData('video'))
    const catData=JSON.parse(e.dataTransfer.getData('catData'))
    catData.videos=catData.videos.filter((val)=>val?.id!==video?.id)
    try {
      const res=await updateCategoryAPI(catData.id,catData)
      setDeleteCategoryRes(res)
      if(res.status>=200 && res.status<300){
        const res=await addVideoAPI(video)
        if(res.status>=200 && res.status<300){
          getAllVideos()
          toast.success(`${video?.caption} added to all videos and deleted from ${catData.name}`)
        }
      }
    } catch (error) {
      console.log("error to delete video from category (drag - view) :",error);
    }
  }
  return (
    <>
      <Row className="" onDragOver={(e) => e.preventDefault()} onDrop={(e) => handleVideoDrop(e)}>
        {allVideos.length > 0 ? (
          allVideos.map((item) => (
            <Col key={item.id + item.caption} lg={4} md={6} sm={12}>
            <VideoCard  item={item} setDeleteVideoRes={setDeleteVideoRes} />
            </Col>
          ))
        ) : (
          <div>
            <h5 className="text-danger fw-bold text-center">
              No items found in playlist
            </h5>
          </div>
        )}
      </Row>
    </>
  );
};

export default View;
