import React, { useContext } from 'react';

import './footer.scss';
import { appContext } from '../../App';
const Footer = () => {
    const {
        dark
      } = useContext(appContext);
      
  return (
    <div className={`footer ${dark ?'dark':''}`}>
        <h1 className="footer-title"> MANS1611 </h1>
        <h3 className="under-title">Junior  JavaScript Web Developer</h3>
        <h3 className="under-title">Jonior JavaScript Web Developer</h3>
    </div>
  )
}

export default Footer