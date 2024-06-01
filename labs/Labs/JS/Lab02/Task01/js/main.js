let name , phoneNumber , mobileNumber , Email, FavColor;
let nameRegx=/^[A-Za-z]{2,}$/;
let phoneNumberRegx=/^[0-9]{8}$/;
let mobileNumberRegx=/^(01)[012][0-9]{8}$/;
let emailRegx=/^[A-Za-z0-9]{2,}@[A-Za-z0-9]{2,}(.com)$/;
do{
    name= prompt("Enter Your name at leat 2 characters (ex : Mo) : ");
}while(!nameRegx.test(name));
 do{
    phoneNumber= prompt("Enter Your Correct home number  it must 8 numbers (ex : 03333333) : ");
}while(!phoneNumberRegx.test(phoneNumber));
do{
    mobileNumber= prompt("Enter Your Mobile Number it must 11 numbers  (ex : 01060362514) : ");
}while(!mobileNumberRegx.test(mobileNumber));
do{
    Email= prompt("Enter Your  valid Email  (ex : Mo@mo.com) : ");
}while(!emailRegx.test(Email));
do{
    FavColor= Number(prompt("Enter Number of Fav Color Email  (ex : 1- red enter 1) 1-red 2-green 3-blue : "));
}while(isNaN(FavColor));
switch(FavColor){
    case 1:
        FavColor="red";
        break;
    case 2: 
        FavColor="green";
        break;
    case 3:
        FavColor="blue";
        break; 
    default:
        FavColor="black";           

}

document.write(
    `
        <div >
            <p style="color:${FavColor}"> Welcome dear guest ${name}</p>
            <p style="color:${FavColor}">your telephone nunmber is ${phoneNumber}</p>
            <p style="color:${FavColor}">your mobile number is ${mobileNumber}</p>
            <p style="color:${FavColor}">your email address is ${Email}</p>
        </div>
    
    `


)