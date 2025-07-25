import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [selectedMode, setSelectedMode] = useState("btnradio1");
  const [darkMode,setDarkMode]=useState(false)
  console.log(darkMode);
  
  
  const toggleTheme = (mode) => {
    const isDark = mode === 'btnradio2';
    setDarkMode(isDark)
    document.body.setAttribute("data-bs-theme", isDark?'dark':'light');
  };
  return (
    <div className="d-flex justify-content-center my-4 w-100">
      <nav className="navbar navbar-expand-lg bg-body-tertiary w-50">
        <div className="d-flex justify-content-between">
          <Link
            to={"/"}
            className="text-decoration-none navbar-brand fs-2 ms-2 ms-sm-4 ms-md-5 fw-bold border-none outline-none "
          >
            Melofy
          </Link>
          <p className="mt-4 d-none d-sm-block" style={{ color: "blueviolet" }}>
            all in one beat.
          </p>
        </div>
        <div
          className="btn-group ms-auto me-3"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autoComplete="off"
            checked={selectedMode === "btnradio1"}
            onChange={() => {
              setSelectedMode("btnradio1");
              toggleTheme("btnradio1");
            }}
          />
          <label
            className="btn btn-outline-primary text-center h-75"
            htmlFor="btnradio1"
          >
            Light
          </label>
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
            checked={selectedMode === "btnradio2"}
            onChange={() => {
              setSelectedMode("btnradio2");
              toggleTheme("btnradio2");
            }}
          />
          <label
            className="btn btn-outline-primary text-center h-75"
            htmlFor="btnradio2"
          >
            Dark
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Header;
