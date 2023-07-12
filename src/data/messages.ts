export interface messageInterface{
    id:number,
    question : string,
    answer: string,
    time:string | null,
    hasLinks:boolean
}  


export const messages:messageInterface[] = [
    {
        id:1,
        question : "What is your Full Name?",
        answer : "Manosur Mohamed Manosur Aly Yousef.",
        time:null,
        hasLinks : true
    },
    {
        id:2,
        question : "How Old Are You?",
        answer : "I am 21 years old.",
        time:null,
        hasLinks : true
    },
    {
        
        id:3,
        question : "What is your role?",
        answer : "I am a senior student @ Faculty of Engineering in Ain Shams University, I am also looking for a job or intern, which can deepen my knowledge in both Web and Data Science Field",
        time:null,
        hasLinks : true
    },
    {
        id:4,
        question : "Do You have Experince in web development?",
        answer : "Yes I have about 2 years and more than 6 months in developing web site using different technoligies for both Frontend and Backend. Beside That I have worked in remote start-up company (Custex) as Web developer",
        time:null,
        hasLinks : true
    },
    {
        id:5,
        question : "How I can contact with you?",
        answer : `You can contact with my via my linkedin profile <a style='color:#ffffff' target='_blank' href='https://www.linkedin.com/in/mansour-yousef-90366b21b/'>My LinkedIn</a>`,
        time:null,
        hasLinks : true
    },
] 

