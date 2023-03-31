import React from 'react';
import CryptoJS from "crypto-js";
import QRCode from 'qrcode';
import axios from "axios";
import { Loader } from 'react-feather';
import { useState, useEffect } from 'react';
import { InputLabel } from '../inputs/InputLabel';
import { TextArea } from '../inputs/TextArea';
import { ButtonQRCode } from '../buttons/ButtonQRCode';
import { ButtonDownload } from '../buttons/ButtonDownload';
import { ImageComponent } from '../images/ImageComponent';
import { LogoBuzzvelComponent } from '../images/LogoBuzzvelComponent';
import { createRoot } from 'react-dom/client';
import logoBuzzvelComponent from '../../images/buzzvel.png';

export const Form = () => {

  const [name, setName] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [observation, setObservation] = useState('');
  const [github, setGithub] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [qrcode, setQrcode] = useState('');
  const [disabled, setDisabled] = useState(true);
  const currentDate = new Date();

  const GenerateQRCode = () => {
    setIdentifier(CryptoJS.MD5(name + linkedin + github + currentDate).toString());
  }

  useEffect(() => {

    if (name !== '' && linkedin !== '' && github !== '' && observation !== '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

  }, [name, linkedin, github, observation]);

  useEffect(() => {

    if(identifier == '')
      return

    const nameWithouSpaces = name.replace(/\s/g, "");

    QRCode.toDataURL(`http://localhost:3000/virtualcards/${nameWithouSpaces}/`+identifier,{
      width: 300,
      margin: 2,
      color : {dark: '#DC2626'}
    },(err, url) => {
      if(err) return console.log(err);
      setQrcode(url);
    });

  }, [identifier]);

  useEffect(() => {

    if(identifier == '')
      return

    const externalDivQRCode = document.getElementById('externalDivQRCode');
    const qrcDiv = document.getElementById('QRCodeRetangle');
    const spinnerLoader = document.getElementById('spinnerLoader');
    const msgSpinner = document.getElementById('msgSpinner');
    const qrc = document.getElementById('qrc');
    const buttonDownload = document.getElementById('buttonDownload');

    externalDivQRCode.classList.remove('hidden');
    qrcDiv.classList.remove('hidden');
    
    const root1 = createRoot(spinnerLoader);
    root1.render(<Loader className="animate-spin slower h-80 w-10 text-red-700" />);
    msgSpinner.classList.remove('hidden');

    async function postData() {

      try {

         const virtualCardData = {
          name: name,
          linkedin: linkedin,
          github: github,
          observation: observation,
          identifier: identifier
        };

        const headers = {
          Accept: 'application/json'
        };

        const response = await axios.post(`http://localhost:8000/api/v1/virtualcards`, virtualCardData, {headers});
        if(!response)
          alert("We couldn't save the data you filled out. Please try again later or contact support if the problem persists.");

        spinnerLoader.classList.add('hidden');
        msgSpinner.classList.add('hidden');

        qrc.classList.remove('hidden');
        const root2 = createRoot(qrc);
        root2.render(<ImageComponent src={qrcode} alt="QR Code" />);
    
        buttonDownload.classList.remove('hidden');
        const root3 = createRoot(buttonDownload);
        root3.render(<ButtonDownload href={qrcode} download="qrcode.png" />);

      } catch (error) {
        alert(error);
        externalDivQRCode.classList.add('hidden');
      }
    }

    postData();
    
  }, [qrcode]);

  return(

    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-8 mb-8 border-4 border-red-600 h-100">

      <LogoBuzzvelComponent src={logoBuzzvelComponent} alt="Logo" />

      <InputLabel label="Name" name="name" type="text" onChange={(evt) => {
        if(evt.target.value.replace(/\s/g, "") != '')
          setName(evt.target.value.replace(/\s+/g, " ").trim());
        else
          setName('');
      }}/>

      <InputLabel label="LinkedIn URL" name="linkedin" type="text" onChange={(evt) => {
        if(evt.target.value.replace(/\s/g, "") != '')
          setLinkedin(evt.target.value.replace(/\s/g, ""));
        else
          setLinkedin('');
      }} />

      <InputLabel label="Github URL" name="github" type="text" onChange={(evt) => {
        if(evt.target.value.replace(/\s/g, "") != '')
          setGithub(evt.target.value.replace(/\s/g, ""));
        else
          setGithub('');
      }} />

      <TextArea label="About me" placeholder="Share your story here..." onChange={(evt) => {
        if(evt.target.value.replace(/\s/g, "") != '')
          setObservation(evt.target.value);
        else
          setObservation('');
      }} />

      <ButtonQRCode text="Generate QR Code" onClick={GenerateQRCode} disabled={disabled} />

    </form>

  );
}

export default Form;