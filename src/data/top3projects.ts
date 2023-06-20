
import messi from '../assets/messi.jpeg';
import commerce from '../assets/ecommerce.png';
import design from '../assets/design.jpg';
import pl from '../assets/pl.jpg';

export interface topinterface {
    title:string,
    link:{},
    type:string,
    projectImg:string,
    description:string
}
export const top3projects:topinterface[] = [
    {
        title:"Design Portofilio",
        link : {repo:false,link:"https://www.figma.com/file/clDpgYxWYuO1G8Q7PDTT72/Untitled?type=design&node-id=102-15&t=0lo83nzmXHEkpaop-0"},
        type:"design",
        projectImg : design,
        description :"Desiging my personal portofolio is smothing that I am proud of. I designed dark and light mode for the design, and also the colors were matching with each other.",
    },
    {
        title:"Expect (FIFA World Cup Game)",
        link : {repo:true,link:"https://github.com/Mans1611/Expect"},
        type:"web",
        projectImg : messi,
        description :"Virtual Game like Fantasy Premier League, but it was meant for World Cup in 2022, the game is virtual game, you expect match winner, the result of that game and finally your star players.Depends on your Exception you collect points and you compete with your friends and all other players. You can create a team of 5 players and compete with other teams, your team's points will be gathered for all the players.",

    }, 
    
    {
        title:"Analyis Premire League",
        link : {repo:false,link:"https://www.kaggle.com/code/mans1611/premier-league"},
        type:"data",
        projectImg : pl,
        description :"Analyising the Premiere League Teams, matches, and players from 2006-2018, having the best teams performance and the leaset as well. Using pandas and plotly.express to plot and join between dataframes.",
    },
]