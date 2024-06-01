let numbers = [];
for (let index = 0; index < 5; index++) {
    var number;
    do{
        number=Number(prompt(`Please enter your ${index+1} : `));
    }while(isNaN(number));
    numbers.push(number);
}
let arrAsc=[...numbers];
let arrDesc=[...numbers];
arrAsc.sort((a,b)=> a-b);
arrDesc.sort((a,b)=> -(a-b));

document.write(
`
<div>
    <p style="color:red">you have entered the values of <span style="color:#09c"> ${numbers.join(" , ")}</span></p>
    <p style="color:red">your values after being sorted descending <span style="color:#09c"> ${arrDesc.join(" , ")} </span></p>
    <p style="color:red">your values after being sorted aescending <span style="color:#09c"> ${arrAsc.join(" , ")} </span></p>
</div>

`

)

