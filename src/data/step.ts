import designprocess from '../assets/designprocess.jpg';
import coding from '../assets/coding.png';
import cloud from '../assets/cloud.jpg';
export interface stepsInterface {
    backgroundColor : string,
    title : string,
    para : string,
    img : string,
    rightImg:boolean,
    darkBackgroundColor : string
}

export const steps:stepsInterface[] = [
    {
        backgroundColor : '#F2F2F2',
        title : '1-Design',
        para : 'creating and collaborate on designs in real-time. With Figma, I can create wireframes, prototypes, and high-fidelity designs for websites and web applications',
        img : designprocess,
        rightImg:true,
        darkBackgroundColor : '#011520'
    },
    {
        backgroundColor : '#90B26E',
        title : '2-Develop',
        para : 'Creating web applications that involve both front-end and back-end. I have the knowledge and skills to handle all aspects of web development, from designing user interfaces and writing code for the front-end, to managing servers and databases on the back-end. So I have the a sufficient skills in multiple programming languages and frameworks like Python and JavaScript',
        img : coding,
        rightImg:false,
        darkBackgroundColor : '#31BF70'
    },
    {
        backgroundColor : '#90B26E',
        title : '3-Deploy',
        para : 'Deploying the website on cloud like aws, Microsft azure or Heroku. Fixing possible bugs.',
        img : cloud,
        rightImg:true,
        darkBackgroundColor : '#011520'
    }
] 