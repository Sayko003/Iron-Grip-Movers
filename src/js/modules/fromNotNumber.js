const fromNotNumber = function(){
    const setReplacer = (target, expression) => {
        target.addEventListener('input', () => {
            const parsedValue = target.value.replace(expression, '');
            
            if (parsedValue !== target.value) {
            target.value = parsedValue;
            }
        });
    };
    
    setReplacer(document.querySelector('#to'), /[\W\d]/g);
    setReplacer(document.querySelector('#from'), /[\W\d]/g);
}

export default fromNotNumber;