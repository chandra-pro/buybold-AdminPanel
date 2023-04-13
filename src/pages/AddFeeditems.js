import React, { useState } from "react";
import axios from "axios";
import SidebarSeller from "../scenes/global/SidebarSeller";
import './AdminDashboard.css'
import Spinner from 'react-bootstrap/Spinner';
const BACKEND_URI = 'http://localhost:4002/'

const AddFeeditem = () => {
  const [spiner,setSpiner] = useState(false);
  const config = { headers: { 'Content-Type': 'multipart/form-data' } }

  const hadleSubmit = (e) => {
    e.preventDefault();
    setSpiner(true);

    let formdata = new FormData(e.target);
    axios.post(`${BACKEND_URI}user/addproduct`, formdata, { headers: { 'Content-Type': 'multipart/form-data' } }).then((data) => {
      setSpiner(false);
      alert("Submitted successfully");
      return data
    }).catch((error) => {
      alert("error happened");
      return error
    })

  };

  return (

    <div className="form-container">
      <SidebarSeller />
      <div className="form-subcontainer">
        <h2>Add Reel Video</h2>
        <form onSubmit={hadleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              className="form-control"
            />
          </div>


          <div className="form-group">
            <label htmlFor="video">Upload Videos</label>
            <input
              type="file"
              name="video"
              id="video"
              // multiple
              className="form-control"
              accept=".mp4, .mkv"
            // onChange={(e) => {
            //   setVideos(e.target.files);
            // }}
            />
          </div>
         

          <button type="submit" id="form-button" className="btn btn-primary mt-2">
            Submit
            {
                            spiner ? <span><Spinner animation="border" /></span>:""
                        }
          </button>
        </form>
      </div>
    </div>

  );
};

export default AddFeeditem;