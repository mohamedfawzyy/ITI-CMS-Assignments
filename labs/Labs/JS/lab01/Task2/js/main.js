
let temp =+prompt("Enter Temp of the Day: ")
getWeather(temp);
function getWeather(temp){
    temp>=30? document.write(`<h1 style="background-color:yellow">Hot!!</h1>`):document.write(`<h1 style="background-color:#09c">Cold!!</h1>`);
   
}
