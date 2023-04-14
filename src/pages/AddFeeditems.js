import React, { useState,useEffect } from "react";
import axios from "axios";
import SidebarSeller from "../scenes/global/SidebarSeller";
import './AdminDashboard.css'
import Spinner from 'react-bootstrap/Spinner';
import TemplateCard from "./TemplateCard";
const BACKEND_URI = 'http://localhost:4002/'






const AddFeeditem = () => {

    const [listitem,setlistitem]=useState([]);
   
   
    var sellerid=localStorage.getItem("sellerid");
    
    const AllProducts= async()=>{
        await fetch(BACKEND_URI + `user/getsellerproducts/${sellerid}`, { method: 'POST', body: JSON.stringify({}), })
        .then((response) => response.json())
        .then((data) => {
          console.log("Items found");
                console.log(data);
                if(data){
                setlistitem(data);
               

                }
                else{
                  setlistitem([{message:"dont have any products"}])
                  
                }
              })
              .catch((error) => {
                console.log(error);
              });

    }
   
    useEffect(()=>{
        AllProducts();
        
    },[])
  const [spiner,setSpiner] = useState(false);
  const [selectedArray,setSelectedArray]=useState([])

  const handleClick=(i)=>{
  const tempArray =[...selectedArray]
  if(tempArray[i]==i){tempArray[i]=undefined}
  else {tempArray[i]=i}
  
  setSelectedArray(tempArray)
  }

  const hadleSubmit = (e) => {
    e.preventDefault();
    setSpiner(true);

    let formdata = new FormData(e.target);
    axios.post(`${BACKEND_URI}user/uploadreels`, formdata, { headers: { 'Content-Type': 'multipart/form-data' } }).then((data) => {
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
<h2>Select Products to add in Reels</h2>
          <div className='scrollContainer'>
            {listitem.map((item,index) => (
                <TemplateCard
                    
                    title={item.name}
                    description={item.description}
                    img={item.image}
                    price={item.price}
                    // classNameToAdd={styles.cardContainer}
                    
                    // selected={selectedArray[index]==index? true:false}
                    handleClick={handleClick}
                    index={index}
                />
            ))}
        </div>
         

          <button type="submit" id="form-button" className="btn btn-primary mt-20">
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