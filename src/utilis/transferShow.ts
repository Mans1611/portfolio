export const translateShow = (id:string,width:number):void=>{
    const web = document.getElementById('web-projects');
    const data = document.getElementById('data-projects');
    const design = document.getElementById('design-projects');


    
        if (id ===  "web" && width > 560 ){
            if(data?.style !== undefined && web?.style !==undefined ){
                data.style.transform = 'translateX(95%)';
                web.style.transform = 'translateX(50px)';
            }
        }
        else if( id === "data" && width > 560 ){
            if(data?.style !== undefined && web?.style !==undefined){
                web.style.transform = 'translateX(50px)';
                data.style.transform = 'translateX(100px)';
            }
        }
        else if(id === "design" && width > 560  ){
               if(data?.style !== undefined && web?.style !==undefined){
                   data.style.transform = 'translateX(95%)';
                   web.style.transform = 'translateX(90%)';
           }
        }
        else if (id ===  "web" && width <= 560 ){
            if(data?.style !== undefined && web?.style !==undefined ){
                data.style.transform = 'translateY(90%)';
                web.style.transform = 'translateY(50px)';
            }
        }
        else if( id === "data" && width <= 560 ){
            if(data?.style !== undefined && web?.style !==undefined){
                web.style.transform = 'translateY(50px)';
                data.style.transform = 'translateY(100px)';
            }
        }
        else if(id === "design" && width <= 560  ){
               if(data?.style !== undefined && web?.style !==undefined){
                   data.style.transform = 'translateY(90%)';
                   web.style.transform = 'translateY(81%)';
           }
        }
       

    
}