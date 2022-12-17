

const inpt = document.querySelector('#inpt');

const btn = document.querySelector("#btn");


const list = document.getElementById('list');



const deletefn = (count) =>{
    document.getElementById(`li-${count}`).style.display= 'none';
}

let count = 0 ; 
const addToTodo = () => {
    if( inpt.value != '' ){
        list.innerHTML += `<li id='li-${count}'  class='todo'> <span >${inpt.value}</span> <strong onclick='deletefn(${count})' id="str-${count}"> </strong> </li>`;        
        inpt.value='';
        count++
    }
}


btn.addEventListener('click',addToTodo);


// inpt.addEventListener('change',(e) => {
//     if(e.target.value != '')
//         btn.disabled  = false ; 
//     else
//         btn.disabled= true
// });