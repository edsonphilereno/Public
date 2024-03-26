(function(){
    const password = document.querySelector('.password');
    const passwordLength = document.querySelector('#length');
    const upperCase = document.querySelector('#uppercase');
    const lowerCase = document.querySelector('#lowercase');
    const numbers = document.querySelector('#numbers');
    const specials = document.querySelector('#specials');
    const btnGerar = document.querySelector('.gerar');
    const btnCancelar = document.querySelector('.cancelar');


    function cancelar() {
        passwordLength.value = 1;
        upperCase.checked = true;
        lowerCase.checked = false;
        numbers.checked = false;
        specials.checked = false;
        passwordGerado = '';
        password.textContent = '--------';
    }

    function rand (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    btnCancelar.addEventListener('click', () => {
        cancelar();
    });

    let passwordGerado = '' | null;

    function geraSenha() {
        return new Promise((resolve) => {
        upperCase.checked && setTimeout(()=>{passwordGerado += String.fromCharCode(rand(65, 91))}, rand(1,10));
        lowerCase.checked && setTimeout(()=>{passwordGerado += String.fromCharCode(rand(97,123))}, rand(1,10));
        numbers.checked && setTimeout(()=>{passwordGerado += String.fromCharCode(rand(48, 58))},rand(1,10));
        specials.checked && setTimeout(()=>{passwordGerado += String.fromCharCode(rand(33,48))},rand(1,10));

        resolve(passwordGerado);
        });
    }

   

    btnGerar.addEventListener('click', () => {    
        let i = 1;     
        while (i <= passwordLength.value) {
            geraSenha().then(
                (response) =>{
                    passwordGerado = response;
                }
            );
            i++;
        };

        setTimeout(() =>{
            console.log(passwordGerado.length);
            password.innerHTML = passwordGerado.slice(0, passwordLength.value);
            passwordGerado = '';
        }, 50);
    });


})();