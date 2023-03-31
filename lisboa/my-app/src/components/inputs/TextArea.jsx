import React from 'react';

export function TextArea(props) {
  return (
    <div className="mb-4">
      <label className="block text-black text-sm font-bold mb-2">{props.label}</label>
      <textarea
        className="h-24 shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
  </div>
  );
}

export default TextArea;
