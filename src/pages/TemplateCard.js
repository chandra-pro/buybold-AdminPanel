import React, { useState,useEffect } from "react";

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
    
    let className = `cardContainer`;

    if (selected) {
        className += `cardContainer cardContainerClicked`;
    }
   

    return (
        <div  className={className} onClick={()=>handleClick(index)}>
            <img className='imageSize' src={img}></img>
           <div className="pricecontainer">
            <h4>Price:</h4>
            <h4>{price}</h4>
           </div>
           <div className='titlesize'>
            <h4>Name:</h4>
            <h4>{title}</h4>
            </div>
            <div className='descriptioncard'>
                <h4>Desc:</h4>
                <h4>{description}</h4>
            </div>
            
        </div>
    );
};
export default TemplateCard;