(function () {
    const calculo = document.querySelector('#calculo');
    const display = document.querySelector('#display');
    const teclado = document.querySelector('.teclado-container');
    const numbers = document.querySelectorAll('.botao');
    
    let op = '';
    let num = '';
    let num2 = '';

    function limpa(){
        display.value = '';
        calculo.textContent = '';
        op = '';
        num = '';
        num2 = '';
    }

    function calcula(num, op, num2){
        let total = 0;
        switch (op) {
            case '+':
                total = Number(num) + Number(num2);
                display.value = total;
                calculo.textContent = `${num} ${op} ${num2} =`;
                break;
            case '-':
                total = Number(num) - Number(num2);
                display.value = total;
                calculo.textContent = `${num} ${op} ${num2} =`;
                break;
            case '*':
                total = Number(num) * Number(num2);
                display.value = total;
                calculo.textContent = `${num} ${op} ${num2} =`;
                break;
            case '/':
                total = Number(num) / Number(num2);
                display.value = total;
                calculo.textContent = `${num} ${op} ${num2} =`;
                break;
            default:
                break;
        }
    }

    function verificaOperacao (operacao) {
        const arrOperacao = ['+', '-', '*', '/'];
        for(value of arrOperacao) {
            if (value === operacao) {
                op = value;
                return true;
            };
        };
    };



    teclado.addEventListener('click', (e)=>{
        const element = e.target;
        const igual = element.textContent === '=' ? true : false;
        const operacao = verificaOperacao(element.textContent);
        
        if (element.textContent.length > 2) return; // Evita colocar o CE no campo

        if (!operacao) {
            display.value += element.textContent;
        };

        if (operacao) {
            if (op !== '' && num != '') {
                num2 = display.value;
                calcula(num, op, num2);
            };

            num = display.value;
            calculo.textContent = display.value + op;
            display.value = '';
        };

        if (element.textContent === 'CE') {
            limpa();
            return;
        };

        if (igual) {
            num2 = display.value.slice(0, -1);
            calcula(num, op, num2);
        };

    });   

})();