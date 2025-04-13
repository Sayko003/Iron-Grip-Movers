import headerLocation from "./modules/headerLocation";
import slider from "./modules/slider";
import accardion from "./modules/accardion";
document.addEventListener(`DOMContentLoaded`, () =>{

    // headerLocation('.header--link-location', '.header--location', 'header--location-active');

    headerLocation();
    slider();
    accardion();
});