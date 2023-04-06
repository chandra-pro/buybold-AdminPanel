import React, { useState } from "react";
import axios from "axios";
import SidebarSeller from "../scenes/global/SidebarSeller";
import './AdminDashboard.css'
const BACKEND_URI = 'http://localhost:4002/'

const ProductForm = () => {
  const [name, setName] = useState("");
  const [desc, setdesc] = useState("");
  const [cover, setCover] = useState([]);
  const [proImage, setproImage] = useState([]);
  const [videos, setVideos] = useState([]);


  const hadleSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    for (var i = 0; i < videos.length; i++) {
      formdata.append("videos", videos[i]);
    }
    for (var j = 0; j < proImage.length; j++) {
      formdata.append("proImage", proImage[j]);
    }

    formdata.append("name", name);
    formdata.append("desc", desc);
    // // formdata.append("cover", cover)

    var payload = {}
    formdata.forEach((key, value) => {
      console.log(value, key);
      payload[value] = key
    })
    console.log(payload)
    axios
      .post(`${BACKEND_URI}user/add`, payload)
      .then((success) => {

        alert("Submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error happened!");
      });
  };

  return (

    <div className="form-container">
      <SidebarSeller />
      <div className="form-subcontainer">
        <h2>Add Product</h2>
        <form onSubmit={hadleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc">Description</label>
            <input
              type="text"
              name="desc"
              id="desc"
              className="form-control"
              onChange={(e) => setdesc(e.target.value)}
            />
          </div>
          {/* <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div> */}

          <div className="form-group">
            <label htmlFor="videos">Upload Videos</label>
            <input
              type="file"
              name="videos"
              id="videos"
              multiple
              className="form-control"
              accept=".mp4, .mkv"
              onChange={(e) => {
                setVideos(e.target.files);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Images">Product Images</label>
            <input
              type="file"
              name="images"
              id="images"
              multiple
              className="form-control"
              accept=".jpg, .png,.jpeg,.webp"
              onChange={(e) => {
                setproImage(e.target.files);
              }}
            />
          </div>

          <button type="submit" id="form-button" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>

  );
};

export default ProductForm;