import React, { useContext } from 'react'
import './step.scss';
import { stepsInterface } from '../../data/step';
import App, { appContext } from '../../App';

const Step = ({step}:{step:stepsInterface}) => {
  const {dark} =  useContext(appContext)
    return (
    <div style={dark ? {backgroundColor:step.darkBackgroundColor} :{backgroundColor:step.backgroundColor}}
     className={`step-container ${dark?'dark':''}`}>
        <div className="flex-container">
            {
                step.rightImg ? 
                (
                    <>
                    <div className="text-wrapper">
                        <h1>{step.title}</h1>
                        <p>{step.para}</p>
                    </div>
                    <div className="img-wrapper">
                        
                    {step.belt && <div className="belt"></div>}
                        <img src={step.img}  />
                    </div>
                    </>
                ):
                (
                    <>
                        <div className="img-wrapper">
                            {step.belt && <div className="belt"></div>}
                                <img src={step.img}  />
                        </div>
                        <div className="text-wrapper">
                            <h1>{step.title}</h1>
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