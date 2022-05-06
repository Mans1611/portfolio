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


export interface projectInterface {
    title:string,
    skills : {skillsName:string,icon:string}[],
    description : string,
    link : {repo: boolean, link : string},
    teamWork : boolean,
    projectImg:string,
    type:string | null
}

export interface feildsInterface{
    title : string,
    description : string[],
    backgroundColor:string,
    id:string,
    img:string,
    projects : projectInterface[]
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
            {
                title:"Expect (FIFA World Cup Game)",
                link : {repo:true,link:""},
                type:"",
                skills : [
                    {skillsName:"Node.JS",icon:node},
                    {skillsName:"Express.JS",icon:express},
                    {skillsName:"React.JS",icon:react},
                    {skillsName:"Redux.JS",icon:redux},
                    {skillsName:"Mongo.JS",icon:""},
                ],
                projectImg : messi,
                description :"Virtual Game like Fantasy Premire League, but it was meant for World Cup in 2022, the game is expection game, you expect  match winner, the result of that game and finally your star players.Depends on your Expection you collect points and you compete with your friends and all other players. You can create a team of 5 players and compete with other teams, your team's points will be gathered for all the players.",
                teamWork : false
            }
        ]
    },

    {
        title:"Full Stack Web",
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
                projectImg : messi,
                description :"Virtual Game like Fantasy Premier League, but it was meant for World Cup in 2022, the game is virtual game, you expect match winner, the result of that game and finally your star players.Depends on your Exception you collect points and you compete with your friends and all other players. You can create a team of 5 players and compete with other teams, your team's points will be gathered for all the players.",
                teamWork : false
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
                ],
                projectImg : commerce,
                description :"Fully Back end stystem for Store, providing authntication and autorization by JWT, you can create account and start to buy items from the store. All CRUD are provided in this backend system like POST,GET PUT, and DELETE. PostgreSQL was used as a database mangment system (DBMS)",
                teamWork : false
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