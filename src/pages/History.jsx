import { React, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import {
  deleteHistoryAPI,
  getAllVideoAPI,
  getHistoryDataAPI,
} from "../service/allAPI";
import { toast } from "react-toastify";

const History = () => {
  const [historyData, setHistoryData] = useState([]);
  useEffect(() => {
    getHistoryData();
  }, []);

  const getHistoryData = async () => {
    try {
      let res = await getHistoryDataAPI();
      console.log("history", res);
      if (res.request.status >= 200 && res.request.status < 300) {
        setHistoryData(res.data);
      }
    } catch (error) {
      console.log("error to get hisory data", error);
    }
  };

  const handleDeleteHistory = async (item) => {
    try {
      let res = await deleteHistoryAPI(item.id);
      if (res.request.status >= 200 && res.request.status < 300) {
        getHistoryData()
        toast.success(`${item.caption} removed from history`)
      }
    } catch (error) {
      console.log("error to delete history ",error)
      toast.warning("error to delete history ",error)
    }
  };
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
        {historyData.length > 0 ? (
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
              {historyData.map((item,index) => (
                <tr key={item.id + item.caption}>
                  <td>{index+1}</td>
                  <td>{item.caption}</td>
                  <td>
                    <Link className="video-link" to={item.youtubeUrl}>
                      {item.youtubeUrl}
                    </Link>
                  </td>
                  <td>{item.dateAndTime}</td>
                  <td>
                    <i
                      onClick={() => handleDeleteHistory(item)}
                      className="fa-solid fa-trash text-danger video-del"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <div>
            <h5 className="text-danger fw-bold text-center">
              No videos watched yet
            </h5>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default History;
