import headerLocation from "./modules/headerLocation";
import slider from "./modules/slider";
import accardion from "./modules/accardion";
document.addEventListener(`DOMContentLoaded`, () =>{

    try {
        headerLocation();
        slider();
        accardion();
    }
    catch (error) {
        console.log('The error found here is', error)
    }
    
});