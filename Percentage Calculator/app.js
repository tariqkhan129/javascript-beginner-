
function percentage(){
    let number1 =+document.querySelector("#num1").value;
    let number2 =+document.querySelector("#num2").value;
    let number3 =+document.querySelector("#num3").value;
    let number4 =+document.querySelector("#num4").value;
    let number5 =+document.querySelector("#num5").value;
    
    let sum=number1+number2+number3+number4+number5;
    let percent= ( sum * 100 )  / 500;
    document.querySelector("#result").innerHTML=`The Percentage of ${number1} , ${number2} ,${number3} , ${number4} and ${number5} = ${percent} %`;
    
    
    }
    