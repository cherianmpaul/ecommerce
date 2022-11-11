import React from 'react';
import { AlFillInstagram, AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 CMP Headphones All rights Reserved </p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer