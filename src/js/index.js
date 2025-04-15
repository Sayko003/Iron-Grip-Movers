import headerLocation from "./modules/headerLocation";
import slider from "./modules/slider";
import accardion from "./modules/accardion";
import mobNav from "./modules/mobNav";
import dataForm from "./modules/dataPicker";
import formHero from "./modules/formHero";
import formMaskTel from "./modules/formMaskTel";
import fromNotNumber from "./modules/fromNotNumber";


document.addEventListener(`DOMContentLoaded`, () =>{
    
    
    try {
        headerLocation();
        mobNav();
        slider();
        accardion();
        if(document.getElementById('form')){
            dataForm();
            formMaskTel();
            fromNotNumber();
            formHero();
        }
    }
    catch (error) {
        console.log('The error found here is', error)
    }
    
});