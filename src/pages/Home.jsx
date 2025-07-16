import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import View from "../components/View";
import Footer from "../components/Footer";
import Add from "../components/Add";
import { getAllVideoAPI } from "../service/allAPI";

const Home = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getAllVideoAPI().then((res) => {
      setVideos(res.data);
      console.log("hai", res.data);
    });
  }, []);
  return (
    <div>
      <Header />
      <Add />
      <div className="row border border-1 mx-md-3">
        <div className="col-lg-6 shadow my-3">
          <h3 className="fw-bold my-4 mx-md-4 text-center text-md-start" style={{color:"blueviolet"}}>
            All videos
          </h3>
          <View videos={videos} />
        </div>
        <div className="col-lg-6 ">category</div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
