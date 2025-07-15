import React from "react";
import Header from "../components/Header";
import View from "../components/View";
import Footer from "../components/Footer";
import Add from "../components/Add";

const Home = () => {
  return (
    <div>
      <Header />
      <Add />
      <div className="row border border-1 mx-md-3">
        <div className="col-lg-6 shadow my-3">
          <h3 className="text-danger fw-bold my-4 mx-md-4 text-center text-md-start">
            All videos
          </h3>
          <View />
        </div>
        <div className="col-lg-6 ">category</div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
