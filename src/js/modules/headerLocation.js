const headerLocation = () =>{
    const btnLink = document.querySelector('.btn--location'),
        block = document.querySelector('.header--block-location'),
        body = document.querySelector('body');

    btnLink.addEventListener(`click`, (e) =>{
        block.classList.toggle('header--block-location-active')
       
    })

}

export default headerLocation;