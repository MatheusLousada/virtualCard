import React from "react";

export function LogoBuzzvelComponent(props) {
    return (
        <div className='flex mb-4'>
            <img src={props.src} alt={props.logo} className="h-20 w-20 rounded-full mx-auto shadow-lg" />
        </div>
    );
}

export default LogoBuzzvelComponent;