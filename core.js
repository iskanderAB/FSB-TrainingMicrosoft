


const data = localStorage.getItem('todoData'); // localStorage hia el base locale elli nekhdmo 3liha 

if (data === null) { // awel marra nhel el app 
    localStorage.setItem('todoData','[]')
}



const inpt = document.querySelector('#inpt');

const btn = document.querySelector("#btn");

const list = document.getElementById('list');

// module js 
(function fetchData(){
    JSON.parse(localStorage.getItem('todoData')).forEach((element,index) => {
        console.log('elemen',element);
        console.log('index',index);
        console.log('-------------')
        document.querySelector('ul').innerHTML += `<li id='li-${index}'  class='todo'> <span >${element}</span> <strong onclick='deletefn(${index})' id="str-${index}"> </strong> </li>`; 
    });
})()



const deletefn = (count) =>{
    document.getElementById(`li-${count}`).style.display= 'none';
    let myTodos = JSON.parse(localStorage.getItem('todoData'));
    myTodos =  myTodos.filter((elemnt,index)=> {  // faltarnaaa el tablau mta3na 
        if(index !== count)
            return v
    })
    localStorage.setItem('todoData',JSON.stringify(myTodos)) // tefsha el tab el 9dim w thot el jdid 
}

let count = JSON.parse(localStorage.getItem('todoData')).length; 

const addToTodo = () => {
    if( inpt.value != '' ){
        list.innerHTML += `<li id='li-${count}'  class='todo'> <span >${inpt.value}</span> <strong onclick='deletefn(${count})' id="str-${count}"> </strong> </li>`; 
        let myTodos = JSON.parse(localStorage.getItem('todoData'));
        myTodos.push(inpt.value);
        localStorage.setItem('todoData', JSON.stringify(myTodos));
        // localStorage.setItem('todoData', `'${myTodos}'`);
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