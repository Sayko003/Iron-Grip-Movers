const headerLocation = () =>{
    const btnLinkHeader = document.querySelector('.header-btn--location'),
        blockHeader = document.querySelector('.header--block-location'),
        btnLinkFooter = document.querySelector('.footer-btn--location'),
        blockFooter = document.querySelector('.footer--block-location'),
        body = document.querySelector('body'),
        btnMobLink = document.querySelector('.header--mob--selects'),
        blockMob = document.querySelector('.header--mob--select');

    function showLocation(btn,block,activeClass){
        btn.addEventListener(`click`, (e) =>{
            e.preventDefault();

            block.classList.toggle(activeClass);
        })
    }
    
    if(window.innerWidth > 1010){
        showLocation(btnLinkHeader,blockHeader, `header--block-location-active`);
        showLocation(btnLinkFooter,blockFooter, `footer--block-location-active`);
    }
    if(window.innerWidth <= 1010){
        showLocation(btnMobLink,blockMob, `header--mob--select-active`);
        showLocation(btnLinkFooter,blockFooter, `footer--block-location-active`);
    }
    
}

export default headerLocation;