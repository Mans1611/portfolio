import React, { useContext, useEffect, useRef, useState } from 'react'
import './certificate.scss';

import { certifacteInterface, certificateStart } from '../../data/certificate';
import { appContext } from '../../App';
let change:boolean = true;
const Certificate = () => {
  
 
  const {dark} = useContext(appContext);

    const [currentCer,setCurrentCer] = useState(certificateStart);
    
   useEffect(()=>{
        
        const interval = setInterval(()=>{
            const curslide = document.getElementById('current-slide');
            const nextslide = document.getElementById('next-slide');
            if(change){
                (curslide as HTMLElement).style.transform = 'translateX(-100%)';
                (nextslide as HTMLElement).style.transform = 'translateX(-100%)';
                (nextslide as HTMLElement).style.zIndex = "9";
                setTimeout(()=>{
                    (curslide as HTMLElement).style.transform = 'translateX(100%)';
                },400)
                change = false;
            }else{
                (nextslide as HTMLElement).style.zIndex = "8";
                (curslide as HTMLElement).style.zIndex = "9";
                (curslide as HTMLElement).style.transform = 'translateX(0%)';
                (nextslide as HTMLElement).style.transform = 'translateX(-200%)';
                setTimeout(()=>{
                    (nextslide as HTMLElement).style.transform = 'translateX(0%)';
                },400)
                change = true;
            }

            setCurrentCer((c)=>c.nextCertificate as certifacteInterface);
        },8000)
        const certificate = document.getElementById('certificate-view')
        const circle_blur = document.getElementById('blur-circle');
        certificate?.addEventListener('mousemove',(event)=>{
            if(circle_blur?.style){
                circle_blur.style.top = `${event.clientY}px`
                circle_blur.style.left = `${event.clientX}px`
            }

        })
        return ()=> clearInterval(interval);
   },[currentCer])
    return (
            <div id='certificate-view' className={`certificate-view ${dark?'dark':''}`}>
                {/* <div id="blur-circle"></div> */}
                <h1 className='title'>Certificate</h1>
                <div className="grid-container">
                    <div className="flex-column">
                        <div className="certificate-container">
                            <img  id='current-slide' src={currentCer.img}/>
                            <img  id='next-slide' src={currentCer.img}/>
                            <img id='third-slide' src={currentCer.nextCertificate?.nextCertificate?.img}/>
                        </div>
                        <div className="small-pic-container">
                            <img onClick={()=>setCurrentCer(certificateStart)} className='small-pic' src={certificateStart.img}/>
                            <img onClick={()=>setCurrentCer(certificateStart.nextCertificate as certifacteInterface)} className='small-pic' src={certificateStart.nextCertificate?.img}/>
                            <img onClick={()=>setCurrentCer(certificateStart.nextCertificate?.nextCertificate as certifacteInterface)} className='small-pic' src={certificateStart.nextCertificate?.nextCertificate?.img}/>
                        </div>
                    </div>
                    <div className="description-container">
                            <div className="flex">
                              <h2>Programe :</h2> <span className='value'>{currentCer.programeName}</span>
                            </div>
                            <div className="flex">
                                <h2>Platform : </h2><span className='value'>{currentCer.platform}</span>

                            </div>
                            <div className="flex">
                                <h2>Thanks To : </h2><span className='value'>{currentCer.source}</span>

                            </div>
                            <div className="flex">
                                <h2>Year : </h2>
                                <h1 className='value'>{currentCer.year}</h1>

                            </div>
                            <h2>Description :</h2>
                            <p>{currentCer.description}</p>
                    </div>
                </div>
                
        </div>
    )
}

export default Certificate