import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";

const Landing = () => {
  return (
    <div>
      <Header />
      <div className="p-3 row ">
        <div className="left col-lg-6 ps-3 py-3 d-flex flex-column mb-sm-4">
          <h1 className="">
            Welcome to{" "}
            <span className="fw-bold" style={{ color: "blueviolet" }}>
              Melofy
            </span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            consequatur nesciunt blanditiis, dolorum cumque rem fugit ipsum
            inventore natus veritatis, reprehenderit labore voluptatem non
            similique earum quam molestias corporis tempore? Id dignissimos eos,
            deleniti inventore quo asperiores! Quidem voluptas, quaerat incidunt
            aspernatur corrupti architecto labore itaque nemo inventore adipisci
            praesentium, voluptates quos eligendi enim eveniet dolore dolorum
            iste officia! Laborum.
          </p>
          <Link
            to={"/home"}
            className="d-flex justify-content-center justify-content-md-start text-decoration-none w-100 w-sm-50"
          >
            <button
              style={{ backgroundColor: "blueviolet" }}
              className="btn text-white fw-bold my-2 p-2 w-100"
            >
              Get Started
            </button>
          </Link>
        </div>
        <div className="right col-lg-6 d-flex justify-content-center align-items-center">
          <img
            src="https://i.gifer.com/Up2T.gif"
            className="d-none d-md-block"
            width={300}
            height={300}
            alt="mainImage"
            style={{ scale: 1.1, borderRadius: "50%" }}
          />
        </div>
      </div>
      <Cards />
      <Footer />
    </div>
  );
};

export default Landing;
