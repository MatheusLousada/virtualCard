import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { Card } from '../cards/Card';
import { createRoot } from 'react-dom/client';

export function LandingPage() {
  const { name, identifier } = useParams();

  useEffect(() => {

    async function getData() {

      try {

        const response = await axios.get(`http://localhost:8000/api/v1/virtualcards/${name}/${identifier}`);
        if(!response)
          alert("We couldn't find any records with those parameters. Please generate the QR code again.");

          const {github, linkedin, observation} = JSON.parse(response.data)[0];
          const card = document.getElementById('card');
          const root2 = createRoot(card);
          root2.render(<Card name={name} github={github} linkedin={linkedin} observation={observation} />);

      } catch (error) {
        alert(error);
      }
    }

    getData();
    
  }, []);

  return (
    <div id='card'>
      <div className="flex justify-center items-center h-screen">
        <p className='text-red-500 font-bold' id='searching'>Searching...</p>
      </div>
    </div>
  );
}

export default LandingPage;