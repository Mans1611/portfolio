import ux from '../assets/ux.png'
import data from '../assets/data.png'
import web from '../assets/development.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import express from '../assets/express.png'
import sql from '../assets/sql.png'
import typescript from '../assets/typescript.png'
import node from '../assets/node.png'
import messi from '../assets/messi.jpeg'
import commerce from '../assets/ecommerce.png'
import mongo from '../assets/mongo.png'
import portfolio from '../assets/portfolio.png'
import figma from '../assets/figma.png'
import formdesign from '../assets/formdesign.png'
import expect1 from '../assets/expect1.png'
import expect2 from '../assets/expect2.png'
import expect3 from '../assets/expect3.png'
import expect4 from '../assets/expect4vert.png'
import expect5 from '../assets/expect5.png';
import expect6 from '../assets/expect6.png';
import expect7 from '../assets/expect7.png';

import rule1 from '../assets/expectsrules/rule1.jpg'
import rule2 from '../assets/expectsrules/rule2.jpg'
import rule3 from '../assets/expectsrules/rule3.jpg'
import rule4 from '../assets/expectsrules/rule4.jpg'
import rule5 from '../assets/expectsrules/rule5.jpg';
import rule6 from '../assets/expectsrules/rule6.jpg';
import rule7 from '../assets/expectsrules/rule7.jpg';
import rule8 from '../assets/expectsrules/rule8.jpg';

import form1 from '../assets/custex/form1.png';
import form2 from '../assets/custex/figma2.png';
import form3 from '../assets/custex/figma3.png';
import form4 from '../assets/custex/figma4.png';
import form5 from '../assets/custex/figma5.png';
import form6 from '../assets/custex/figma6.png';

import portdesign1 from '../assets/portfoliodesign/port1.png';
import portdesign2 from '../assets/portfoliodesign/port2.png';
import portdesign3 from '../assets/portfoliodesign/port3.png';
import portdesign4 from '../assets/portfoliodesign/port4horz.png';
import portdesign5 from '../assets/portfoliodesign/port6horz.png';
import portdesign6 from '../assets/portfoliodesign/portfolio5.png';
import aws from '../assets/aws.png';
import docker from '../assets/docker.png';
import soalak from '../assets/studing.jpg';

export interface projectInterface {
    title:string,
    skills : {skillsName:string,icon:string}[],
    description : string,
    link : {repo: boolean, link : string},
    teamWork : boolean,
    projectImg:string,
    type:string | null,
    status : 'Done' | 'OnGoing',
    images : {imgs:string,horizental:boolean} [] | null
}

export interface feildsInterface{
    title : string,
    description : string[],
    backgroundColor:string,
    id:string,
    img:string,
    projects : projectInterface[],
    
}
export const workingFields:feildsInterface[] = [
    {
        title:"UI/UX Design",
        description : [
            "Design Wire frames.",
            "Design Application on Figma.",
            "Design for both Mobile App and Web Pages."
        ],
        backgroundColor : "#FC4545",
        id:"design",
        img:ux,
        projects : [
            // portfolio design
            {
                title:"My Portfolio",
                link : {repo:false,link:"https://www.figma.com/file/clDpgYxWYuO1G8Q7PDTT72/Untitled?type=design&mode=design&t=Poh5TYB86q3VD0Qj-0"},
                type:"",
                skills : [
                    {skillsName:"Figma Design",icon:figma},
                ],
                projectImg : portfolio,
                description :"Design my personal portfolio with which holds my personal projects and experince in Design, Web Development and Data Science",
                teamWork : false,
                status : 'Done',
                images : [

                    {imgs:portdesign1,horizental:false},
                    {imgs:portdesign2,horizental:false},
                    {imgs:portdesign3,horizental:false},
                    {imgs:portdesign4,horizental:true},
                    {imgs:portdesign5,horizental:true},
                    {imgs:portdesign6,horizental:false},
                ]
            },
            
            // custex forms
            {
                title:"Design Forms and Home Page",
                link : {repo:false,link:"https://www.figma.com/file/2ZgTYGkgCtmbnyjaBFh531/Untitled?type=design&node-id=0-1&mode=design&t=iAMT2JOIOL5wgOnh-0"},
                type:"",
                skills : [
                    {skillsName:"Figma Design",icon:figma},
                ],
                projectImg : formdesign,
                description :"Design the Sign up and login form component for custex using Figma or also Ligh and Dark modes, which increase te users experince and he users liked it",
                teamWork : false,
                status : 'Done',
                images : [
                    
                    {imgs:form1,horizental:true},
                    {imgs:form2,horizental:true},
                    {imgs:form3,horizental:true},
                    {imgs:form4,horizental:true},
                    {imgs:form5,horizental:true},
                    {imgs:form6,horizental:true},
                ]
            },
            // Expect design
            {
                title:"Expect (FIFA World Cup Game)",
                link : {repo:false,link:"" },
                type:"",
                status : 'Done',
                skills : [
                    {skillsName:"Figma",icon:figma},
                ],
                projectImg : messi,
                description :"Designg the all pages and components of expect like matches, expect cards and etc, using Figma for both Light and Dark mode.",
                teamWork : false,
                images : null
            },
        ]
    },

    {
        title:"Web Development",
        description : [
            "Make Front end using React & Next.js.",
            "Build Back end and API using Node.js or Django.",
            "Build and Design Database using MongoDB or SQL."
        ],
        backgroundColor : "#D1DA36",
        id:"web",
        img:web,
        projects : [
            {
                title:"Expect (FIFA World Cup Game)",
                link : {repo:true,link:"https://github.com/Mans1611/Expect"},
                type:"Full Stck",
                skills : [
                    {skillsName:"Node.JS",icon:node},
                    {skillsName:"Express.JS",icon:express},
                    {skillsName:"React.JS",icon:react},
                    {skillsName:"Redux.JS",icon:redux},
                    {skillsName:"Mongo.JS",icon:mongo},
                ],
                status : 'Done',
                projectImg : messi,
                description :"Virtual Game like Fantasy Premier League, but it was meant for World Cup in 2022, the game is virtual game, you expect match winner, the result of that game and finally your star players.Depends on your Exception you collect points and you compete with your friends and all other players. You can create a team of 5 players and compete with other teams, your team's points will be gathered for all the players.",
                teamWork : false,
                images : [
                    {imgs:expect1,horizental:true},
                    {imgs:expect2,horizental:true},
                    {imgs:expect3,horizental:true},
                    {imgs:expect4,horizental:false},
                    {imgs:expect5,horizental:true},
                    {imgs:expect6,horizental:true},
                    {imgs:expect7,horizental:true},
                    
                    {imgs:rule1,horizental:false},
                    {imgs:rule2,horizental:false},
                    {imgs:rule3,horizental:false},
                    {imgs:rule4,horizental:false},
                    {imgs:rule5,horizental:false},
                    {imgs:rule6,horizental:false},
                    {imgs:rule7,horizental:false},
                    {imgs:rule8,horizental:false},


                ],
            },
            {
                title:"My Personal Pertfolio",
                link : {repo:true,link:"https://github.com/Mans1611/portfolio"},
                type:"FrontEnd",
                skills : [
                    {skillsName:"React.JS",icon:react},
                    {skillsName:"Node.JS",icon:node},
                    {skillsName:"TypeScript",icon:typescript},
                ],
                status : 'Done',
                projectImg : portfolio,
                description :"My personal portfolio which display my personal projects and experince in both Web Developemnt and Data Science.",
                teamWork : false,
                images:null
            },

            {
                title:"E-Commerce",
                link : {repo:true,link:"https://github.com/Mans1611/StoreFront_Backend"},
                type:"Back End",
                skills : [
                    {skillsName:"Node.JS",icon:node},
                    {skillsName:"TypeScript.JS",icon:typescript},
                    {skillsName:"Express.JS",icon:express},
                    {skillsName:"PostgreSQL",icon:sql},
                    {skillsName:"AWS",icon:aws},
                ],
                status : 'Done',
                projectImg : commerce,
                description :"Fully Back end stystem for Store, providing authntication and autorization by JWT, you can create account and start to buy items from the store. All CRUD are provided in this backend system like POST,GET PUT, and DELETE. PostgreSQL was used as a database mangment system (DBMS)",
                teamWork : false,
                images : null,
            },
            {
                title:"So?alak",
                link : {repo:false,link:"https://github.com/Mans1611/So2alak"},
                type:"Full Stack",
                skills : [
                    {skillsName:"React.JS",icon:react},
                    {skillsName:"Node.JS",icon:node},
                    {skillsName:"Express.JS",icon:express},
                    {skillsName:"PostgreSQL",icon:sql},
                    {skillsName:"Docker",icon:docker},
                ],
                status : 'OnGoing',
                projectImg : soalak,
                description :"A college-system sharable information community between the students related to their courses, by creating a bridge between professors and students. The professors are to be on a platform and answer, reply to, and verify students’ answers.",
                teamWork : true,
                images : null,
            },

        ]
    },
    {
        title:"Data Science",
        description : [
            "Load Data from SQL or NOSQL Database.",
            "Clean Data from unrelated data and outliers.",
            "Exploring data and showing graphs using (matplot.lib, pandas).",
            "Build  Machine learning models which suites the type of data set whether it supervised or unsupervised."
        ],
        backgroundColor : "#439F4C",
        id:"data",
        img:data,
        projects : [

        ]
    },
]