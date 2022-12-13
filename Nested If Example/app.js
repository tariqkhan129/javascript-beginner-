function nestedif (){

    let dbEmail="abc@example.com";
    let dbPassword = "12345";

    let inputEmail= document.querySelector("#email").value;
    let inputPassword= document.querySelector("#password").value;

    if (inputEmail===dbEmail)
    {
        if (inputPassword===dbPassword)
        {
            document.querySelector("#result").innerHTML=` Login Successful`;
        }
            else {
            document.querySelector("#result").innerHTML=` Incoorect Password <br>  Enter Password again`;
            }}
     else
     {
        document.querySelector("#result").innerHTML=` Invalid Email <br>  Enter a Valid Email`;
     }       
    }
