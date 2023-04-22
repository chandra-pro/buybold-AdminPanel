import React, { useState, useEffect } from "react";
import axios from "axios";
import SidebarSeller from "../scenes/global/SidebarSeller";
import './AdminDashboard.css'
import Spinner from 'react-bootstrap/Spinner';
import TemplateCard from "./TemplateCard";
import './AdminDashboard.css'
import { BASE_URL } from "../env";







const AddFeeditem = () => {

  const [listitem, setlistitem] = useState([]);


  var sellerid = localStorage.getItem("sellerid");
  const [value, setValue] = useState('Mens');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const AllProducts = async () => {
    await fetch(BASE_URL + `user/getsellerproductsforReels/${sellerid}/${value}`, { method: 'POST' })
      .then((response) => response.json())
      .then((data) => {
        console.log("Items found");
        console.log(data);
        if (data) {
          console.log("paplu", data)
          setlistitem(data);
        }
        else {
          setlistitem([])
        }
      })
      .catch((error) => {
        console.log(error);
      });

  }

  useEffect(() => {
    AllProducts();

  }, [value])
  const [spiner, setSpiner] = useState(false);
  const [selectedArray, setSelectedArray] = useState([])

  const handleClick = (i) => {
    const tempArray = [...selectedArray]
    if (tempArray[i] == i) { tempArray[i] = undefined }
    else { tempArray[i] = i }
    setSelectedArray(tempArray)
  }

  const hadleSubmit = (e) => {
    e.preventDefault();
    setSpiner(true);

    let formdata = new FormData(e.target);
    axios.post(`${BASE_URL}user/uploadreels/${sellerid}`, formdata, { headers: { 'Content-Type': 'multipart/form-data' } }).then((data) => {
      setSpiner(false);
      alert("Submitted successfully");
      formdata = new FormData();
      return data
    }).catch((error) => {
      alert("error happened");
      return error
    })

  };
  const hehe = (e) => {
    var key = e.code || 0;
    if (key === "Enter") {
        e.preventDefault();
        const tag = e.target.value;
        const el = document.createElement('div');
        el.textContent = tag;
        const icon = document.createElement('i');
        icon.classList = "close fas fa-times";
        icon.addEventListener('click', (e) => {
            const tag = "category_" + e.target.parentElement.textContent;
            document.getElementById(tag).remove();
            e.target.parentElement.remove();
        })
        el.appendChild(icon);
        el.classList = "vmchip";
        document.getElementById('TagList').appendChild(el);
        e.target.value = "";
        const option = document.createElement('option');
        option.value = tag;
        option.id = "category_" + tag;
        option.setAttribute('selected', true);
        document.getElementById('myTagList').appendChild(option);
    }
}

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
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              className="form-control"
            />
          </div>
          <div className="form-group">
                        <div className='col-md' id="TagList" style={{ border: "solid lightgray 1px", width: "calc(100% - 30px)", margin: "auto", display: "flex", flexWrap: "wrap" }}>
                        </div>
                        <input className="form-control" list="myTagList" id="TagAdd" onKeyDown={hehe} placeholder="Add Tag...." />
                        <select id="myTagList" name="taglist" style={{ visibility: "hidden", display: "none" }} multiple>
                        </select>
                    </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>

            <div className="dropdown-container">
              <select className="dropdown-subcontainer" name="category" value={value} onChange={handleChange}>
                <option value="Mens">Mens</option>
                <option value="womens">Womens</option>
                <option value="electronics">Electronics</option>
                <option value="home decor">Home Decor</option>
                <option value="healthcare">Healthcare</option>
                <option value="beauty">Beauty</option>

              </select>
            </div>
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
          {/* <h2>Select Products to add in Reels</h2>
          <div className='scrollContainer'>
            {listitem.map((item, index) => {
              console.log(item)
              return <TemplateCard

                title={item.name}
                description={item.description}
                img={item.imageUrl}
                price={item.price}
                // classNameToAdd={styles.cardContainer}

                // selected={selectedArray[index]==index? true:false}
                handleClick={handleClick}
                index={index}
              />
            })}
          </div> */}


          <button type="submit" id="form-button" className="btn btn-primary mt-20">
            Submit
            {
              spiner ? <span><Spinner animation="border" /></span> : ""
            }
          </button>
        </form>
      </div>
    </div>

  );
};

export default AddFeeditem;