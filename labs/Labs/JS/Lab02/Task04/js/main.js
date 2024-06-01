let radius , number ,  angle;
do{
    radius=Number(prompt("Please enter the value of circle radius : "))

}while(isNaN(radius));

alert(`Total area of circle is ${Math.PI * radius * radius}`)

do{
    number=Number(prompt("Please enter the value of you want to calculate its square root : "))

}while(isNaN(number));

alert(`Square root of ${number} is  ${Math.sqrt(number)}`);

do{
    angle=Number(prompt("Please enter the value of angle you want to calculate its cos : "))

}while(isNaN(angle));

alert(`cos of ${angle}° is  ${Math.cos(angle)}`)