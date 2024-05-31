let name , birthYear , age;
do{
    name=prompt("Enter your name : ");
    var regx=/^[A-Za-z]{1,}$/;
    console.log(regx.test(name));
}while(!(typeof(name) == 'string') || !regx.test(name))
 
do{
        birthYear=Number(prompt("Enter your birth year : "));

}while( isNaN(birthYear) || (birthYear >= 2010) )

age=new Date().getFullYear() - birthYear;

document.write(
    `
    <div>
        <ul>
            <li>Name : ${name}</li>
            <li>Birth Year : ${birthYear}</li>
            <li>Age : ${age}</li>
        </ul>
    </div>
    `

)
