import { CottageOutlined } from "@mui/icons-material";
import React,{useState,useEffect} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import SidebarSeller from "../scenes/global/SidebarSeller";
const BACKEND_URI='https://localhost:4000/'
const medias=[{
    name:"Shoe",
    desc:"Sneaker which is purely CottageOutlined.It looks good",
    price:"499",
    proImage:"https://media.istockphoto.com/id/956501428/photo/sport-shoes-on-isolated-white-background.jpg?s=612x612&w=0&k=20&c=BdklqnfGUvf02-2CxYsw-AnrbE3e-B5zhE9JQILEEW4=",
    videos:"https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/63y00O5/20151208_220224_5dmk3_ninjabld_woman_tying_running_shoes_s001_s001_t001_108_vnscgih8e__ff2101312d42da1953ddbc3eb63d0bda__P360.mp4"
},
{
    name:"Sneaker",
    desc:"It will boil anything in just a while",
    price:"1499",
    proImage:"https://media.istockphoto.com/id/956501428/photo/sport-shoes-on-isolated-white-background.jpg?s=612x612&w=0&k=20&c=BdklqnfGUvf02-2CxYsw-AnrbE3e-B5zhE9JQILEEW4=",
    videos:"https://player.vimeo.com/external/208046219.sd.mp4?s=1abf2b26803cad88174de2f6c84e0f38dc486d21&profile_id=164"
},
]


const ProductList = () => {
    // const [list,setList]=useState([]);
    // const AllOrders= async()=>{
    //     await fetch(BACKEND_URI + `orderManage/getorders`, { method: 'POST', body: JSON.stringify({}), })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log("Items found");
    //             console.log(data);
    //             if(data){
    //             setList(data);
               

    //             }
    //             else{
    //               setList([{message:"dont have any orders"}])
                  
    //             }
    //           })
    //           .catch((error) => {
    //             console.log(error);
    //           });

    // }
    
   
    // useEffect(()=>{
    //     AllOrders();
        
    // },[])
  return (
    <div className="Product-container">
    <SidebarSeller />
    <div className='Delivery-card'> <Card className="Delivery-ind-Card">
              <>
          {medias.length >= 1 ? (
                  medias.map((event, i) => {
                    return(<><div className="product-card">
                        <div className="product-card-image">
                     <img src={event.proImage} alt="image"></img>
                    
                     </div>
                     <div className="product-card-video">
                     <video controls width="100%">
      <source src={event.videos} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
    </div>
    
                    </div>
                    <h4>{event.name}</h4>
                    <h4>{event.desc}</h4>
                    <h3>{event.price}</h3>
                    </>);
                  })
                ) : (
                  <h2>No Orders</h2>
                )}
          
        </>
      
      
      
    </Card></div>
    </div>
    
  );
};

export default ProductList;