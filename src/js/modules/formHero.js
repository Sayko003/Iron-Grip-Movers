const formHero = function(){
    const form = document.getElementById('form'),
        result = document.getElementById('result');
    if(form !== null){
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
            
            result.innerHTML = "Please wait..."

            fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                })
                .then(async (response) => {
                    let json = await response.json();
                    if (response.status == 200) {
                        result.innerHTML = `Your letter is sent, we will contact you soon.`;
                    } else {
                        console.log(response);
                        result.innerHTML = json.message;
                    }
                })
                .catch(error => {
                    console.log(error);
                    result.innerHTML = "Your letter is not sent, check the filling of the form.";
                })
                .then(function() {
                    form.reset();
                    setTimeout(() => {
                        result.style.display = "none";
                    }, 3000);
                });
        });
    }
    
}

export default formHero();