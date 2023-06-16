import ux from '../assets/ux.png'
import data from '../assets/data.png'
import web from '../assets/development.png'


export interface feildsInterface{
    title : string,
    description : string[],
    backgroundColor:string,
    id:string,
    img:string,
    
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
        img:ux
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
        img:web
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
        img:data
    },
]