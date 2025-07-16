import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-info ps-3 p-2 w-100">
        <h1 className="fw-bold my-2" style={{ color: "blueviolet" }}>
          <i
            className="fa-solid fa-music me-2"
            style={{ fontSize: "30px" }}
          ></i>{" "}
          Melofy
        </h1>
        <div className="row">
          <div className="col-lg-6 px-3 py-2 text-white justify-right">
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              possimus ad voluptatum dicta? Quam quis corrupti placeat
              consequatur fugiat aut consequuntur molestias, assumenda esse ea
              recusandae eaque, officia deleniti tempore.Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nulla possimus ad voluptatum
              dicta? Quam quis corrupti placeat consequatur fugiat aut
              consequuntur molestias, assumenda esse ea recusandae eaque,
              officia deleniti tempore.
            </p>
          </div>
          <div className="col-lg-6 row gap-4 gap-md-0 py-1">
            <div className="col-md-4 col-sm-6">
              <h2 className="fw-bold" style={{ color: "blueviolet" }}>
                Links
              </h2>
              <Link
                to={"/"}
                className="text-white text-decoration-none d-block "
              >
                Landing
              </Link>
              <Link
                to={"/home"}
                className="text-white text-decoration-none d-block "
              >
                Home
              </Link>
              <Link
                to={"/history"}
                className="text-white text-decoration-none d-block "
              >
                History
              </Link>
            </div>
            <div className="col-md-4 col-sm-6">
              <h2 className="fw-bold" style={{ color: "blueviolet" }}>
                Guides
              </h2>
              <Link className="text-white text-decoration-none d-block ">
                React
              </Link>
              <Link className="text-white text-decoration-none d-block ">
                React-bootatrap
              </Link>
              <Link className="text-white text-decoration-none d-block ">
                React-router
              </Link>
            </div>
            <div className="col-md-4 ">
              <h2 className="fw-bold" style={{ color: "blueviolet" }}>
                Contact us
              </h2>
              <div className="w-100 d-flex px-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-75 form-control"
                />
                <button className="btn btn-danger w-25 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <div className="icons d-flex mt-3 justify-content-center gap-3 px-1justify-content-md-start text-white">
                <i className="fa-brands fa-facebook fs-5"></i>
                <i className="fa-brands fa-instagram fs-5"></i>
                <i className="fa-brands fa-github fs-5"></i>
                <i className="fa-brands fa-linkedin fs-5"></i>
                <i className="fa-solid fa-phone fs-5"></i>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-3 text-center text-white">
          copyright &copy; julay 2025, media player , built with react
        </p>
      </div>
    </div>
  );
};

export default Footer;
