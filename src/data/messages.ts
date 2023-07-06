export interface messageInterface{
    question : string,
    answer: string,
    time : string
}  


export const messages:messageInterface[] = [
    {
        question : "What is your Full Name?",
        answer : "Manosur Mohamed Manosur Aly Yousef.",
        time : new Date().toISOString().split('T')[1].slice(0,5)
    },
    {
        question : "How Old Are You?",
        answer : "I am 21 years old.",
        time : new Date().toISOString().split('T')[1].slice(0,5)
    },
    {
        question : "What is your role?",
        answer : "I am a senior student @ Faculty of Engineering in Ain Shams University, I am also looking for a job or intern, which can deepen my knowledge in both Web and Data Science Field",
        time : new Date().toISOString().split('T')[1].slice(0,5)
    },
    {
        question : "What is your name",
        answer : "Manosur Mohamed",
        time : new Date().toISOString().split('T')[1].slice(0,5)
    },
] 

