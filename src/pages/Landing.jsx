import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";

const Landing = () => {
  return (
    <div>
      <Header />
      <div className="p-3 row ms-md-4">
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
      {/* video section */}

        <div className="video-section row border m-2 border-3 border-white rounded-3">
          <div className="left col-md-6 p-3">
            <h1>Simple fast and powerfull</h1>
            <p><span className='text-warning'>play everything </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deserunt architecto eligendi praesentium vero omnis, non iure eos fugiat earum ducimus dolorem saepe aliquam qui facilis ullam distinctio aperiam sint.</p>
            <p><span className='text-warning'>play everything </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deserunt architecto eligendi praesentium vero omnis, non iure eos fugiat earum ducimus dolorem saepe aliquam qui facilis ullam distinctio aperiam sint.</p>
            <p><span className='text-warning'>play everything </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deserunt architecto eligendi praesentium vero omnis, non iure eos fugiat earum ducimus dolorem saepe aliquam qui facilis ullam distinctio aperiam sint.</p>

          </div>
          <div className="right col-md-6 d-flex justify-content-center align-items-md-center  ">
            <iframe className='rounded-5' width="560" height="315" src="https://www.youtube.com/embed/72eQ0seOP1k?si=POxwhssgSuw2bWbq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

          </div>
        </div>
      <Footer />
    </div>
  );
};

export default Landing;
