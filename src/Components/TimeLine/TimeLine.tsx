import './timeline.scss';
import plan from '../../assets/planning.png';
import clock from '../../assets/clock.png';

const TimeLine = () => {
    const start = {
        fullDate : new Date('1-1-2022'),
        month : new Date('1-1-2022').getMonth() + 1,
        year : new Date('1-1-2022').getFullYear()
    }
    const end = {
        fullDate : new Date(),
        month : new Date().getMonth() + 1,
        year : new Date().getFullYear()
    }
    
    let counter = 1, year = start.year, month = start.month;
    //    2022     2024
    while(year < end.year || month < end.month){
        counter++;
        if(month == 12) {
            year ++;
            month = 1
        }
        month++;
    }
    

    const experince = [
        {
            name:'Expect',
            duration: 9,
            role : 'Full Stack Web Developer for my personal project',
            startMonth : 'Jan',
            endMonth : 'Sep',
            gridStart : 1
        },
        {
            name:'CustEx',
            duration: 5,
            role : 'Frontend @ remote start-up Web Developer',
            startMonth : 'Oct',
            endMonth : 'Feb',
            gridStart : 10
        },
        {
            name:'So2alak',
            duration: 8,
            role : 'Full Stack Web Developer for my Graduation Project',
            startMonth:'Jun',
            endMonth : 'Now',
            gridStart : 18
        },
    ]

    
  return (
    <div className='timeline-wrapper'>
        <img src = {plan} className='background'/>
        <h1 className="title">TimeLine</h1>
        <div  className="timeline">
            <div className="grid">
                {experince.map((exp,index)=>
                    <div key={index} className='project-name' style={{
                        gridColumn : `${exp.gridStart}/${ exp.gridStart + exp.duration - 1}`
                    }}>{exp.name}</div>
                )}
            </div>
            <div className="duration-background grid">
                {   experince.map((exp,index)=>
                        <div key={index} className='duration flex' style={{
                            gridColumn : `${exp.gridStart}/${exp.duration + exp.gridStart-1}`
                        }}>
                        <div className="circle start">{exp.startMonth}</div>
                        <div className="circle end">{exp.endMonth}</div>
                     </div>
                    )
                }
            </div>
            <div className="names grid">
            {experince.map((exp,index)=>
                    <div key={index} className='project-description' style={{
                        gridColumn : `${exp.gridStart}/${ exp.gridStart + exp.duration - 1}`
                    }}>{exp.role}</div>
                )}
            </div>
        </div>
    </div>
  )
}

export default TimeLine