const accardion = function(){

    const blockTitle = document.querySelectorAll(`.faq--block`),
        blockContent = document.querySelectorAll(`.faq--content`),
        blockWrapper = document.querySelectorAll(`.faq--accardion--wrapper`);

    
    function toggleContent(block, content, wrapper){
        wrapper.addEventListener(`click`, (e) =>{
            e.preventDefault();

            block.classList.toggle(`faq--block-active`);
            content.classList.toggle(`faq--content-active`);
        });
    }

    function arrayEvent(block, content, wrapper){
        wrapper.forEach((item,i) =>{
            toggleContent(block[i], content[i], item);
        });
    }

    arrayEvent(blockTitle, blockContent,blockWrapper);
    blockWrapper[2].click();
}

export default accardion;