export interface messageInterface{
    id:number,
    question : string,
    answer: string,
    time:string | null
}  


export const messages:messageInterface[] = [
    {
        id:1,
        question : "What is your Full Name?",
        answer : "Manosur Mohamed Manosur Aly Yousef.",
        time:null
    },
    {
        id:2,
        question : "How Old Are You?",
        answer : "I am 21 years old.",
        time:null
    },
    {
        
        id:3,
        question : "What is your role?",
        answer : "I am a senior student @ Faculty of Engineering in Ain Shams University, I am also looking for a job or intern, which can deepen my knowledge in both Web and Data Science Field",
        time:null
    },
    {
        id:4,
        question : "WOW",
        answer : "Mohamed",
        time:null
    }
] 

