import matlab from '../assets/matlabcer.png';
import front from '../assets/front.png';
import fullst from '../assets/fullstsack.png';
import datalab from '../assets/datalab.png'
export interface certifacteInterface{
    programeName:string,
    year : number,
    platform : string,
    source : string,
    link : string,
    nextCertificate : certifacteInterface | null ,
    img:string,
    description:string
}
let certificateStart:certifacteInterface,
    certificate2:certifacteInterface,
    certificate3:certifacteInterface,
    certificate4:certifacteInterface;

certificate2 = {   
    programeName:"Mastering Programming with MATLAB",
    year : 2021,
    platform : "Coursera",
    source : "Vanderbilt University",
    link : "https://www.coursera.org/account/accomplishments/verify/YJXFGVYFM8SG?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    nextCertificate : null,
    img : matlab,
    description:""
}
 certificateStart=  {   
    programeName:"Front End Web Development",
    year : 2021,
    platform : "Udacity",
    source : "EgyptFWD",
    link : "confirm.udacity.com/EWRESZHV",
    nextCertificate : null,
    img:front,
    description:""

}
certificate3 = {   
    programeName:"Advanced Full Stcak Web",
    year : 2022,
    platform : "Udacity",
    source : "EgyptFWD",
    link : "confirm.udacity.com/SMDVEWRD",
    nextCertificate : null,
    img:fullst,
    description:""
}
certificate4 = {   
    programeName:"Data Science Lab",
    year : 2023,
    platform : "WorldQUANT University",
    source : "WorldQUANT University",
    link : "https://www.credly.com/badges/bea81d09-c054-4687-bb69-8528ef1f53d6/public_url",
    nextCertificate : null,
    img: datalab,
    description:""
}

certificateStart.nextCertificate = certificate2;
certificate2.nextCertificate = certificate3;
certificate3.nextCertificate = certificate4;
certificate4.nextCertificate = certificateStart;
export {certificateStart};


    
