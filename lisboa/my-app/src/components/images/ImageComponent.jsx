import React from "react";

export function ImageComponent(props) {
    return (
        <div>
            <img className='border-solid border-4 border-black rounded-lg' src={props.src} alt={props.alt} />
        </div>
    );
}

export default ImageComponent;