import React from 'react';
import IconQRCode from '../icons/IconQRCode';

export function ButtonQRCode(props) {
  return (
    <div className="flex items-center justify-center">
      <button className="bg-red-600 shadow enabled:hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 flex disabled:opacity-50 transition duration-300 ease-in-out" type="button" onClick={props.onClick} disabled={props.disabled}>
        <IconQRCode width={20} height={20} />
        <span className='ml-5'>{props.text}</span> 
      </button>
    </div>
  );
}

export default ButtonQRCode;
