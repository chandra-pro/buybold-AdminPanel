import React, { useState } from "react";
import axios from "axios";
import SidebarSeller from "../scenes/global/SidebarSeller";
import './AdminDashboard.css'
const BACKEND_URI='https://localhost:4000/'

const ProductForm = () => {
  const [name, setName] = useState("");
  const [desc,setdesc]=useState("");
  const [cover,setCover]=useState([]);
  const [proImage,setproImage]=useState([]);
  const [videos, setVideos] = useState([]);


  const hadleSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    for (let key in videos) {
      formdata.append("videos", videos[key]);
    }
    
    for (let key in proImage) {
      formdata.append("proImage", videos[key]);
    }

    formdata.append("name", name);
    formdata.append("desc",desc);
    formdata.append("cover",cover)

    axios
      .post(`${BACKEND_URI}/add/`, formdata)
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
      <form  onSubmit={hadleSubmit}>
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
          <label htmlFor="name">Description</label>
          <input
            type="text"
            name="desc"
            id="desc"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
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