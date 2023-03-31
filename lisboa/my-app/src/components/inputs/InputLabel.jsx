import React from 'react';

export function InputLabel(props) {
  return (
    <div className='mb-4'>
      <label htmlFor={props.name} className="block text-black text-sm font-bold mb-2">{props.label}</label>
      <input type={props.type} required name={props.name} id={props.name} onChange={props.onChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"/>
    </div>
  );
}

export default InputLabel;
