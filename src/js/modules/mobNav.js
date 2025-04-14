const mobNav = function(){
    const burger = document.querySelector(`.header--burger`),
        menu = document.querySelector(`.header--mob--nav`),
        close = document.querySelector(`.header--mob--close`),
        overlay = document.querySelector(`.header--mob--overlay`),
        body = document.querySelector(`body`);
    
    function showNav(){
        burger.addEventListener(`click`, (e) =>{
            e.preventDefault();

            body.classList.add(`no-scroll`);
            menu.classList.add(`header--mob--nav-active`);
        })
    }

    function hideNav(item){
        item.addEventListener(`click`, (e) =>{
            e.preventDefault();

            body.classList.remove(`no-scroll`);
            menu.classList.remove(`header--mob--nav-active`);
        })
    }

    showNav();
    hideNav(close);
    hideNav(overlay);
}

export default mobNav;