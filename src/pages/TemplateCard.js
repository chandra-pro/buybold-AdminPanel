import React, { useState, useEffect } from "react";

import './Addproduct.css';

const TemplateCard = ({
    title,
    description,
    img,
    price,
    // classNameToAdd,
    // classNameOnSelected,
    selected,
    handleClick,
    index
}) => {
    const [expanded, setExpanded] = useState(false);

    // let className = `${styles.card} ${classNameToAdd}`;

    // if (selected) {
    //     className += `${styles.card} ${classNameToAdd} ${classNameOnSelected}`;
    // }


    return (expanded ?
        <div className='cardContainer' >
            <img className='imageSize' src={img}></img>
            <div className='titlesize'>
                <h6>Name:</h6>
                <h6 style={{ fontWeight: 900 }}>{title}</h6>
            </div>
            <div className="pricecontainer">
                <h6>Price:</h6>
                <h6>{price}</h6>
            </div>
            <div className='descriptioncard' style={{ height: "75px", overflow: "hidden", paddingTop: "20px" }}>
                <h6>Desc : {description}</h6>
            </div>
            <button style={{ padding: "2px", width: "100px", marginLeft: "100px" }} onClick={() => setExpanded(false)}>Collapse</button>
        </div> :
        <div style={{ width: "300px", height: "100px", border: "solid black 0.5px", boxShadow: "0 0 10px" }} >
            <div className='titlesize'>
                <h6>Name:</h6>
                <h6 style={{ fontWeight: 900 }}>{title}</h6>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <button style={{ padding: "2px", width: "100px", }} onClick={() => setExpanded(true)}>Expand</button>
                <button style={{ padding: "2px", width: "100px", }} onClick={(e) => { e.preventDefault(); handleClick(index) }}>Select</button>
            </div>

        </div>
    );
};
export default TemplateCard;