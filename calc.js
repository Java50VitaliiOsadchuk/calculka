let a = ''; // first number
let b = ''; // second number 
let sign = ''; // sign of operation
let finish = false;

const digit = [ '0', '1', '2', '3', '4', '5',
                '6', '7', '8', '9', '.'];
const action = [ '-', '+', 'x', '/'];

//screen
const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = ''; // first number and result
    b = ''; // second number 
    sign = ''; // sign of operation
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    //pressed not a button
    if(!event.target.classList.contains('btn')) return;
    //pressed button clearAll ac
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';

    //receive pressed button
    const key = event.target.textContent;

    //if button was pressed 0-9 or .
    if(digit.includes(key)){
        if(b ===''&& sign === ''){
        a += key;
        out.textContent = a;
        }

        else if(a!=='' && b!=='' && finish){
            b = key;
            finish = false;
            out.textContent = b;
        }
        
        else{
            b += key;
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;
    }

    //if button was pressed +-/x 
    if(action.includes(key)){
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign);
        return;
    }

    //pressed =.
    if (key ==='=') {
        if (b === '') b = a;
        switch(sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "x":
                a = a * b;
                break;
            case "/":
                if (b === '0'){
                    out.textContent = "error";
                    a = '';
                    b = '';
                    sign = '';
                    return;

                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }

}

