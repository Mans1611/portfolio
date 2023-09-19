import React, { useContext } from 'react'
import './step.scss';
import { stepsInterface } from '../../data/step';
import App, { appContext } from '../../App';

const Step = ({step}:{step:stepsInterface}) => {
  const {dark} =  useContext(appContext)
    return (
    <div className={`step-container ${dark?'dark':''} ${step.rightImg ?'green-bg':'white-bg'} `}>
        <div className="flex-container">
            {
                step.rightImg ? 
                (
                    <>
                    <div className="text-wrapper">
                        <h1 className='white-title'>{step.title}</h1>
                        <p>{step.para}</p>
                    </div>
                    <div className="img-wrapper">
                        <img src={step.img}  />
                    </div>
                    </>
                ):
                (
                    <>
                        <div className="img-wrapper">
                              <img src={step.img} />
                        </div>
                        <div className="text-wrapper">
                            <h1 className='green-title'>{step.title}</h1>
                            <p>{step.para}</p>
                        </div>
                    </>
                )
            }
            
        </div>
    </div>
  )
}

export default Step