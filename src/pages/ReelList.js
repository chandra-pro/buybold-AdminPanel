
import React, { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import './AdminDashboard.css'
import './Addproduct.css'
import TemplateCard from "./TemplateCard";
import SidebarSeller from "../scenes/global/SidebarSeller";
const BACKEND_URI = 'http://localhost:4002/'


const ReelList = () => {
    const [refresh, setRefresh] = useState(false);
    const alterReelProduct = async (reel, product, action) => {
        await fetch(BACKEND_URI + `user/alterReelProduct?r=${reel}&p=${product}&a=${action}`, { method: 'GET' })
            .then((response) => response.json())
            .then((res) => {
                console.log(res);
                setRefresh(!refresh)
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const [listitem, setlistitem] = useState([]);
    const [list, setlist] = useState([]);

    var sellerid = localStorage.getItem("sellerid");
    const Products = async () => {
        await fetch(BACKEND_URI + `user/getsellerproducts/${sellerid}`, { method: 'POST', body: JSON.stringify({}), })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setlist(data);
                }
                else {
                    setlist([])

                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        Products();
    }, [refresh])
    const AllProducts = async () => {
        await fetch(BACKEND_URI + `user/getsellerreels/${sellerid}`, { method: 'POST' })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
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

    }, [refresh])
    const [spiner, setSpiner] = useState(false);

    return (
        <>
            <div className="Product-container">
                <SidebarSeller />
                <div className='scrollContainer'>
                    {listitem.map((event, i) =>
                    (<div className='cardContainer'>
                        <div className='titlesize'>
                            <h4>Name:</h4>
                            <h4>{event.title}</h4>
                        </div>
                        <video width="350px" src={event.videoUrl}></video>
                        <br></br>
                        <h4 style={{ marginLeft: "50px", paddingInline: "10px" }} >Attach Product</h4>
                        <div style={{ width: "100%", height: "120px", overflowY: "scroll" }}>
                            {list.map((el) => {
                                return <div style={{ display: "flex", justifyContent: "space-around", flexDirection: "row", flexWrap: "nowrap" }}>
                                    <h4 >{el.name}
                                    </h4>
                                    <span><input style={{ width: "25px", height: "25px" }} checked={event.products.includes(el._id)} onChange={(e) => {
                                        if (e.target.checked) {
                                            alterReelProduct(event._id, el._id, "add")
                                        }
                                        else {
                                            alterReelProduct(event._id, el._id, "remove")
                                        }

                                    }} type="checkbox"></input> </span>
                                </div>
                            })}
                        </div>
                    </div>)
                    )}






                </div>

            </div>
        </>

    );
};

export default ReelList;