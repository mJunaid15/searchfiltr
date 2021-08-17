import React from "react";

const Sresult = (props)=>{

    const img = `https://source.unsplash.com/600x400/?${props.data}`;
    return(
        <>
        <div>

            <img src={img}  alt="search images"/>

        </div>
        </>
    )
};

export default Sresult;