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
    breakpoints: {
    
        // 320: {
        // slidesPerView: 2,
        // spaceBetween: 20
        // },
        
        // 480: {
        // slidesPerView: 3,
        // spaceBetween: 30
        // },
        320: {
        slidesPerView: 1,
        spaceBetween: 20
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 20
        },
        960: {
        slidesPerView: 3,
        spaceBetween: 20
        },
        1251: {
        slidesPerView: 4,
        spaceBetween: 20
        }
    }
    });
}

export default slider;