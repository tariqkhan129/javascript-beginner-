
function table(){
    let number =+document.querySelector("#num").value;
    
    for (let i=1; i<=10; i++)
    {
    let multiply = number * i;
    document.querySelector("#result").innerHTML+=` ${number} x ${i} = ${multiply} <br />`;
    }
    
    }
    