import { CottageOutlined } from "@mui/icons-material";
import React,{useState,useEffect} from "react";
import './AdminDashboard.css'
import './Addproduct.css'
import TemplateCard from "./TemplateCard";
import SidebarSeller from "../scenes/global/SidebarSeller";
const BACKEND_URI='http://localhost:4002/'


const ProductList = () => {
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
    
  return (
    <>
    <div className="Product-container">
    <SidebarSeller />
    
    <div className='scrollContainer'>
      
              
          
                  {listitem.map((event, i) => 
                    ( <div  className='cardContainer'>
                    <img className='imageSize' src={event.image}></img>
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
                </div>)
                  )}
          
          
        
      
      
      
    </div>
  
    </div>
    </>
    
  );
};

export default ProductList;