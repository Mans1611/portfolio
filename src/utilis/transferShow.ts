export const translateShow = (id:string):void=>{
    const web = document.getElementById('web-projects');
    const data = document.getElementById('data-projects');
    const design = document.getElementById('design-projects');

    switch (id) {
        case "web":
            if(data?.style !== undefined && web?.style !==undefined ){
                data.style.transform = 'translateX(95%)';
                web.style.transform = 'translateX(4%)';
            }
            break;
            case "data":
                if(data?.style !== undefined && web?.style !==undefined){
                    web.style.transform = 'translateX(4%)';
                    data.style.transform = 'translateX(8%)';
                }
                break;
            case "design":
                if(data?.style !== undefined && web?.style !==undefined){
                    data.style.transform = 'translateX(95%)';
                    web.style.transform = 'translateX(90%)';
            }
            break;
       

        default:
            break;
    }
}