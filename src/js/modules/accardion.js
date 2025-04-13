const accardion = function(){

    const blockTitle = document.querySelectorAll(`.faq--block`),
        blockContent = document.querySelectorAll(`.faq--content`);

    
    function toggleContent(block, content){
        block.addEventListener(`click`, (e) =>{
            e.preventDefault();

            block.classList.toggle(`faq--block-active`);
            content.classList.toggle(`faq--content-active`);
        });
    }

    function arrayEvent(block, content){
        block.forEach((item,i) =>{
            toggleContent(item, content[i]);
        });
    }

    arrayEvent(blockTitle, blockContent);
    blockTitle[2].click();
}

export default accardion;