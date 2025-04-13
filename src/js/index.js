import headerLocation from "./modules/headerLocation";
import slider from "./modules/slider";
import accardion from "./modules/accardion";
import mobNav from "./modules/mobNav";
document.addEventListener(`DOMContentLoaded`, () =>{

    
    try {
        headerLocation();
        mobNav();
        // slider();
        // accardion();
    }
    catch (error) {
        console.log('The error found here is', error)
    }
    
});