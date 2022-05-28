import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';



const Footer = () => {
  const date = new Date().getFullYear();
  
  return (
    <div className='footer-container'>
      <p> {`${date} JSM Headphones All Rights Rserved`}</p>
      <p className='icons'>
        <a href='https://www.instagram.com/?hl=en' target='_blank'><AiFillInstagram /></a>
        <a href='https://twitter.com/?lang=en' target= '_blank'><AiOutlineTwitter /></a>
      </p>
    </div>
  )
}

export default Footer