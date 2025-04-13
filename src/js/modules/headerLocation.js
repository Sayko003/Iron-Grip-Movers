const headerLocation = () =>{
    const btnLinkHeader = document.querySelector('.header-btn--location'),
        blockHeader = document.querySelector('.header--block-location'),
        btnLinkFooter = document.querySelector('.footer-btn--location'),
        blockFooter = document.querySelector('.footer--block-location'),
        body = document.querySelector('body');

    // btnLink.addEventListener(`click`, (e) =>{
    //     block.classList.toggle('header--block-location-active')
       
    // })
    function showLocation(btn,block,activeClass){
        btn.addEventListener(`click`, (e) =>{
            e.preventDefault();

            block.classList.toggle(activeClass);
        })
    }

    showLocation(btnLinkHeader,blockHeader, `header--block-location-active`);
    showLocation(btnLinkFooter,blockFooter, `footer--block-location-active`);
}

export default headerLocation;