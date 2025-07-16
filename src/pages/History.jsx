import { React, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { getAllVideoAPI } from "../service/allAPI";

const History = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getAllVideoAPI().then((res) => {
      setVideos(res.data);
      console.log("history", res.data);
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="" style={{ overflowX: "auto", maxWidth: "100%" }}>
        <div className="mx-4 d-flex justify-content-between align-items-center ">
          <h1 className="mt-3 text-decoration-underline">HISTORY</h1>
          <Link
            to={"/home"}
            className="text-decoration-none"
            style={{ color: "blueviolet" }}
          >
            <h1 className="fw-bold fs-4 px-2 py-2 rounded home-btn">
              BACK TO <i className="fa-solid fa-house"></i>
            </h1>
          </Link>
        </div>
        <Table
          striped
          bordered
          hover
          responsive="md"
          className="mt-2 text-nowrap"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>Link</th>
              <th>Date</th>
              <th>- - -</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((item) => (
              <tr key={item.id+item.caption}>
                <td>{item.id}</td>
                <td>{item.caption}</td>
                <td>
                  <Link
                    className="video-link"
                    to={item.youtubeUrl}
                  >
                    {item.youtubeUrl}
                  </Link>
                </td>
                <td>11/07/2025</td>
                <td>
                  <i className="fa-solid fa-trash text-danger video-del" style={{cursor:"pointer"}}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Footer />
    </div>
  );
};

export default History;
