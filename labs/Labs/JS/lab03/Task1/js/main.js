let inputForNewTask=document.querySelector('#newTask input');
let AddBtn=document.querySelector('#add');

let Tasks=document.querySelector('#tasks');

AddBtn.addEventListener('click',addNewTask);

function addNewTask(){
    if(!(inputForNewTask.value)){
        alert("please insert any data yastaaaaa!!!");
    }else{
        let newTask={
            task:inputForNewTask.value
        };
        displayTask(newTask);
    }
    clearinputs();
}

function displayTask(newTask){
    let newelement =document.createElement('div');
    newelement.classList.add('task','d-flex','my-1', 'p-1', 'rounded-pill');
    newelement.innerHTML=
    `
    <input type="text" class="form-control rounded-pill" value="${newTask.task}" readonly >
    <button  onclick="done(this)" class="btn btn-success rounded-pill mx-2"> Done</button>
    <button onclick="remove(this)" class="btn btn-danger rounded-pill"> Delete</button>
    `;
    Tasks.appendChild(newelement);
}

function done(ele) {
    ele.parentNode.classList.add('alert','alert-warning');
    ele.classList.add('disabled');
}

function  remove(ele) {
    ele.parentNode.remove();
}

function clearinputs(){
    inputForNewTask.value="";
}