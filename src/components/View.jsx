import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import VideoCard from "./VideoCard";

const View = ({ videos }) => {
  // let item={
  //   caption:"afreed",imgaeUrl:"afreeeee",youtubeUrl:"https://www.youtube.com/embed/izbydia9jz4?autoplay=1&mute=1"
  // }
  return (
    <>
      <Row>
        {videos.map((item) => (
          <Col key={item.id} lg={4} md={6} sm={12}>
            <VideoCard item={item} />
          </Col>
        ))}
       {/* <Col key={item.id} lg={4} md={6} sm={12}>
            <VideoCard item={item} />
          </Col> */}
      </Row>
    </>
  );
};

export default View;
