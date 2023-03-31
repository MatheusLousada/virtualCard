import React from 'react';

export function ButtonSocialMedia(props) {
  const handleClick = (event) => {
    console.log(props.href)
    event.preventDefault();
    window.open(props.href, '_blank');
  }

  return (
    <button onClick={handleClick} className={props.className}>
      {props.children}
    </button>
  );
}

export default ButtonSocialMedia;
