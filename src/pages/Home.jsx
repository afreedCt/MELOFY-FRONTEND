import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import View from "../components/View";
import Footer from "../components/Footer";
import Add from "../components/Add";
import Category from "../components/Category";
// import HeaderDark from '../components/Header'
const Home = () => {
  const [addVideoRes, setAddVideoRes] = useState({});
  const [deleteCategoryRes,setDeleteCategoryRes]=useState({})
  // const []
  return (
    <div className="">
      <Header />
      {/* <HeaderDark/> */}
      <Add setAddVideoRes={setAddVideoRes} />
      <div className="row border border-1 mx-md-3">
        <div className="col-lg-6 shadow my-3 ">
          <h3
            className="fw-bold my-4 mx-md-4 text-center text-md-start"
            style={{ color: "blueviolet" }}
          >
            All videos
          </h3>
          <View setDeleteCategoryRes={setDeleteCategoryRes} deleteCategoryRes={deleteCategoryRes} addVideoRes={addVideoRes} />
        </div>
        <div className="col-lg-6 ">
          <Category deleteCategoryRes={deleteCategoryRes} setDeleteCategoryRes={setDeleteCategoryRes}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
