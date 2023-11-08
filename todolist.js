'use strict'
let inputBox = document.getElementById("inp");
let todolist = document.querySelector(".todolist");

function Add(){
    if (inputBox.value == ""){
        alert("Please Enter Your Task")
    } else {
        let newTask = document.createElement("li");
        newTask.innerHTML = `${inputBox.value} 
        <span><i class="fa-regular fa-circle-xmark"></i></span></li>`;
        todolist.append(newTask);
        inputBox.value="";
        newTask.querySelector("i").addEventListener("click", remove);
        function remove(){
            newTask.remove()
        }
    }

}

//     else {
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         todolist.appendChild(li);
//     }
// }


