

const inpt = document.querySelector('#inpt');

const btn = document.querySelector("#btn");

const list = document.getElementById('list');


const addToTodo = () => {
    if( inpt.value != '' ){
        list.innerHTML += `<li class='todo'> <span>${inpt.value}</span> <strong> </strong> </li>`;
        inpt.value='';
    }
}

btn.addEventListener('click',addToTodo);


// inpt.addEventListener('change',(e) => {
//     if(e.target.value != '')
//         btn.disabled  = false ; 
//     else
//         btn.disabled= true
// });