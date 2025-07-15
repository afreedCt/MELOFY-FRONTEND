import React from "react";

const Header = () => {
  return (
    <div className="d-flex justify-content-center my-4 w-100">
      <nav className="navbar navbar-expand-lg bg-body-tertiary w-50">
        <div className="d-flex justify-content-between">
          <a className="navbar-brand fs-2 ms-2 ms-sm-4 ms-md-5 fw-bold border-none outline-none " href="#">
            Melofy
          </a>
           <p className="mt-4 d-none d-sm-block" style={{color:"blueviolet"}}>all in one beat.</p>
        </div>
      </nav>
    </div>
  );
};

export default Header;
