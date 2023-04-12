import React, { useState } from "react";
import axios from "axios";
import SidebarSeller from "../scenes/global/SidebarSeller";
import './AdminDashboard.css'
const BACKEND_URI = 'http://localhost:4002/'

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  const [price, setPrice] = useState("");
  const [cover, setCover] = useState();
  const [image, setimage] = useState();
  const [video, setVideos] = useState();
  const config = { headers: { 'Content-Type': 'multipart/form-data' } }

  const hadleSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData(e.target);
    axios.post(`${BACKEND_URI}user/addproduct`, formdata, { headers: { 'Content-Type': 'multipart/form-data' } }).then((data) => {
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
        <h2>Add Product</h2>
        <form onSubmit={hadleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
            // onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">description</label>
            <input
              type="text"
              name="description"
              id="description"
              className="form-control"
            // onChange={(e) => setdescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              className="form-control"
            // onChange={(e) => setPrice(e.target.value)}
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
          <div className="form-group">
            <label htmlFor="image">Product Images</label>
            <input
              type="file"
              name="image"
              id="image"
              multiple
              className="form-control"
              accept=".jpg, .png,.jpeg,.webp"
            // onChange={(e) => {
            //   setimage(e.target.files);
            // }}
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