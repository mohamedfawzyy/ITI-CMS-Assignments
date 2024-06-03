
let Trow=document.querySelector('.row');
console.log(Trow);
let request = new XMLHttpRequest();
let data=[];
request.open("get","https://jsonplaceholder.typicode.com/photos");
request.send();
request.addEventListener("readystatechange",function(){

    if(request.readyState == 4 && request.status == 200){
       data= JSON.parse(request.response).slice(1,100);
      
       displayData(data);
       
    }
})

function displayData(data){
  for (const img of data) {
    let tdata=
    `
    <td class="col-md-3">
        <div class="card">
            <img src="./img.png"  class="card-img-top w-100" alt="...">
            <div class="card-body">
            <h5 class="card-title text-center">${img.id}</h5>
            <h5 class="card-title">${img.title}</h5>
        </div>
    </td>
    `
    ;
    Trow.innerHTML+=tdata;
  }
}