import React from 'react';
import IconDownload from '../icons/IconDownload';

export function ButtonDownload(props) {
  return (
    <div className="flex items-center justify-center">
    <button className="bg-black hover:bg-zinc-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex transition duration-300 ease-in-out" type="button" onClick={props.onClick}>
        <IconDownload width={20} height={20} />
        <a href={props.href} download={props.download} className="ml-5">Download</a>
    </button>
    </div>
  );
}

export default ButtonDownload;
