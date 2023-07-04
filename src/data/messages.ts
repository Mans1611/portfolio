export interface messageInterface{
    sender : boolean,
    text: string,
    time : string
}  


export const messages:messageInterface[] = [
    {
        sender : true,
        text : "Hello, can you tell me about yourself?",
        time : "10:38AM"
    },
    {
        sender : false,
        text : "I am senior student @ Computer Engineering college in Ain Shams University, I am a junior Full Stack Developer and mid junior Data Science.",
        time : "10:40AM"
    },
    {
        sender : true,
        text : "What is your specification in Web?",
        time : "10:42AM"
    },
    {
        sender : false,
        text : "Design web application on Figma.Develop Full stack web applications (JavaScript-django).",
        time : "10:43AM"
    },
] 

