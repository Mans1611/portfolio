import React from 'react'
import './contactme.scss';
import whats from '../../assets/whatsapp.png';
import github from '../../assets/githyb.png';
import linkedin from '../../assets/linked.png';
import { Link } from 'react-router-dom';

const ContactMe = () => {
  return (
    <div className='contactme'>
        <Link target='_blank'  to='https://www.linkedin.com/in/mansour-yousef-90366b21b/'>
            <img src={linkedin} alt="LinkedIn" />
        </Link>
        <Link target='_blank' to='https://github.com/Mans1611'>
            <img src={github} alt="GitHub" />
        </Link>
        <Link target='_blank' to='https://wa.link/bd1hmf'>
            <img style={{width:"55px" , height:"55px"}} src={whats} alt="WhatsApp" />
        </Link>
    </div>
  )
}

export default ContactMe;

