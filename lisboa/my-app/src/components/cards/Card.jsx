import React from 'react';
import {ButtonSocialMedia} from '../buttons/ButtonSocialMedia';
import IconGitHub from '../icons/IconGitHub';
import IconLinkedin from '../icons/IconLinkedin';
import LogoBuzzvelComponent from '../images/LogoBuzzvelComponent'
import logoBuzzvelComponent from '../../images/buzzvel.png';

export const Card = (props) => {

    const formattedName = props.name.replace(/([A-Z])/g, " $1");

    return (
        
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-8 mb-8 border-4 border-red-600 h-100 max-w-xl">
                <LogoBuzzvelComponent src={logoBuzzvelComponent} alt="Logo" />
                <h2 className="text-xl mb-2 break-words mt-10">Hello, my name is <span className='text-red-500 font-bold'>{formattedName}</span></h2>
                <h1 className="text-xl font-bold mb-2 text-2xl mt-10">My history</h1>
                <p className="text-gray-500 text-sm mb-4 break-words">{props.observation}</p>
                <div className="flex gap-2 mt-20">
                    <ButtonSocialMedia href={props.github} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        <IconGitHub />
                    </ButtonSocialMedia>
                    <ButtonSocialMedia href={props.linkedin} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        <IconLinkedin />
                    </ButtonSocialMedia>
                </div>
            </div>
        </div>
    );
}

export default Card;