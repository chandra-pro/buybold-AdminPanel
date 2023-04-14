import React, { useState,useEffect } from "react";


const TemplateCard = ({
    title,
    description,
    img,
    // classNameToAdd,
    // classNameOnSelected,
    // selected,
    handleClick,
    index
}) => {
    
    // let className = `${styles.card} ${classNameToAdd}`;

    // if (selected) {
    //     className += `${styles.card} ${classNameToAdd} ${classNameOnSelected}`;
    // }

    return (
        <div  className='cardContainer' onClick={()=>handleClick(index)}>
            <img className='imageSize' src={img}></img>
            <div className='titlesize'>{title}</div>
            <div className='descriptioncard'>{description}</div>
        </div>
    );
};
export default TemplateCard;