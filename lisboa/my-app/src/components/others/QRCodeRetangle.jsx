import React from 'react';

export const QRCodeRetangle = () => {

  return(
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-8 mb-8 border-4 border-red-600 hidden" id='QRCodeRetangle'>
      
      <div className="flex justify-center items-center font-bold" id='msgSpinner'>Saving your data and generating your QR code!</div>
      <div className="flex justify-center items-center" id='spinnerLoader'></div>
      <div className="flex items-center justify-center mt-8 mb-8 hidden" id='qrc'></div>
      <div className='hidden' id='buttonDownload'></div>
      
    </div>
  );
}

export default QRCodeRetangle;