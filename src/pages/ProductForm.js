import React, { useState} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import SidebarSeller from "../scenes/global/SidebarSeller";
import './AdminDashboard.css'
import Spinner from 'react-bootstrap/Spinner';
import { Select } from "@mui/material";
const BACKEND_URI = 'http://localhost:4002/'

const ProductForm = () => {
  const [spiner,setSpiner] = useState(false);
  const [value, setValue] = useState('Mens');

  const handleChange = (event) => {
 
    setValue(event.target.value);
 
  };
  const config = { headers: { 'Content-Type': 'multipart/form-data' } }
  var sellerid=localStorage.getItem("sellerid");
  const hadleSubmit = (e) => {
    e.preventDefault();
    setSpiner(true);

    let formdata = new FormData(e.target);
    formdata.append("category",value);
    axios.post(`${BACKEND_URI}user/addproduct/${sellerid}`, formdata, { headers: { 'Content-Type': 'multipart/form-data' } }).then((data) => {
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
        <h2>Add Product</h2>
        <form onSubmit={hadleSubmit}>
          {/* <p>{localStorage.getItem("sellerid")}</p> */}
        
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
          <label htmlFor="category">Category</label>
          
 <div className="dropdown-container">
 <select className="dropdown-subcontainer" value={value} onChange={handleChange}>

   <option value="mens">Mens</option>
   <option value="womens">Womens</option>
   <option value="electronics">Electronics</option>
   <option value="home decor">Home Decor</option>
   <option value="healthcare">Healthcare</option>
   <option value="beauty">Beauty</option>

 </select>
 </div>


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
            {
                            spiner ? <span><Spinner animation="border" /></span>:""
                        }
          </button>
        </form>
      </div>
    </div>

  );
};

export default ProductForm;