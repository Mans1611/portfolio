import React, { useContext } from 'react';
import Logo from '../../assets/fullLogo.png';
import './footer.scss';
import { appContext } from '../../App';
import { useLocation, useParams } from 'react-router-dom';
const Footer = () => {
    const {dark} = useContext(appContext);
      
      const {pathname} = useLocation()
      

  return (
    <div className={`footer-container ${dark?'dark':''}`}
    style={{backgroundColor: pathname =='/projects' && !dark ? '#DDFFBB' : (dark? '#011520' : '#F2F2F2')}}
    >
  
      <svg className='waves-horizental' width="1512" height="132" viewBox="0 0 1512 132"  xmlns="http://www.w3.org/2000/svg"
      >

       <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L62.6062 4.95954C126.394 9.91908 251.606 19.8382 378 36.6243C504.394 53.7919 629.606 78.2081 756 83.1676C882.394 88.1272 1007.61 73.2486 1134 68.6705C1260.39 63.711 1385.61 68.6705 1449.39 70.9595L1512 73.2486V132H1449.39C1385.61 132 1260.39 132 1134 132C1007.61 132 882.394 132 756 132C629.606 132 504.394 132 378 132C251.606 132 126.394 132 62.6062 132H0V0Z" fill={pathname =='/projects' && !dark ? '#DDFFBB' : (dark? '#011520' : '#F2F2F2')} fill-opacity="0.8"/>
       <path fill-rule="evenodd" clip-rule="evenodd" d="M0 65.4L50.4 74.28C100.8 83.16 201.6 100.92 302.4 96.48C403.2 92.04 504 65.4 604.8 47.64C705.6 29.88 806.4 21 907.2 21C1008 21 1108.8 29.88 1209.6 45.42C1310.4 60.96 1411.2 83.16 1461.6 94.26L1512 105.36V132H1461.6C1411.2 132 1310.4 132 1209.6 132C1108.8 132 1008 132 907.2 132C806.4 132 705.6 132 604.8 132C504 132 403.2 132 302.4 132C201.6 132 100.8 132 50.4 132H0V65.4Z" fill="#31BF70"/>
      </svg>
    <div className={`footer ${dark ?'dark':''}`}>
       <img src={Logo}/>
       <div className="titles">
          <h3 className="under-title">Junior Full Stack  JavaScript Web Developer &</h3>
          <h3 className="under-title">Junior Data Scientist </h3>
       </div>
    </div>
    </div>
  )
}

export default Footer