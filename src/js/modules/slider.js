import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const slider = function (){
    const swiper = new Swiper('.swiper', {
    modules: [Navigation, ],
    direction: 'horizontal',
    loop: false,
    slidesPerView: 4,
    grabCursor: false,
    allowTouchMove: false,
    spaceBetween: 20,
    navigation: {
        nextEl: '.feedback--arrow-next',
        prevEl: '.feedback--arrow-prev',
    },
    });
}

export default slider;