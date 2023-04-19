
import React, { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import './AdminDashboard.css'
import './Addproduct.css'
import TemplateCard from "./TemplateCard";
import SidebarSeller from "../scenes/global/SidebarSeller";
import { BASE_URL } from "../env";



const ProductList = () => {
  const [listitem, setlistitem] = useState([]);


  var sellerid = localStorage.getItem("sellerid");

  const AllProducts = async () => {
    await fetch(BASE_URL + `user/getsellerproducts/${sellerid}`, { method: 'POST', body: JSON.stringify({}), })
      .then((response) => response.json())
      .then((data) => {
        console.log("Items found");
        console.log("Japlu ", data);
        if (data) {
          setlistitem(data);


        }
        else {
          setlistitem([{ message: "dont have any products" }])

        }
      })
      .catch((error) => {
        console.log(error);
      });

  }

  useEffect(() => {
    AllProducts();

  }, [])
  const [spiner, setSpiner] = useState(false);

  return (
    <>
      <div className="Product-container">
        <SidebarSeller />

        <div className='scrollContainer'>



          {listitem.map((event, i) =>
          (<div className='cardContainer'>
            <img className='imageSize' src={event.imageUrl}></img>
            <div className="pricecontainer">
              <h4>Price:</h4>
              <h4>{event.price}</h4>
            </div>
            <div className='titlesize'>
              <h4>Name:</h4>
              <h4>{event.name}</h4>
            </div>
            <div className='descriptioncard'>
              <h4>Desc:</h4>
              <h4>{event.description}</h4>
            </div>
            <div className="delete-button">
              <button id="form-button" className="btn btn-danger margin-right" onClick={async () => {
                setSpiner(true);


                await fetch(BASE_URL + `user/deleteproduct/${event._id}`, { method: 'DELETE' })

                  .then((response) => response.json())
                  .then((data) => {

                    console.log(data);
                    if (data) {
                      setSpiner(false);
                      alert("deleted Succeessfully");
                      AllProducts();


                    }
                    else {
                      setSpiner(false);

                    }
                  })
                  .catch((error) => {
                    console.log(error);
                    setSpiner(false);
                    alert(error);
                  });

              }
              }>
                Delete
                {
                  spiner ? <span><Spinner animation="border" /></span> : ""
                }
              </button>
            </div>
          </div>)
          )}






        </div>

      </div>
    </>

  );
};

export default ProductList;