'use strict'
const inputBox = document.getElementById("inp");
const todolist = document.querySelector(".todolist");
const clearall = document.getElementById("clear");
const tasksNum = document.querySelector(".tasksNum");
const todo = document.querySelector("todolist");
let array = []
const createTime = getCurrentTime()

function Add() {
    if (inputBox.value.trim().length <= 0) {
        alert("Please Enter Your Task")
    } else {

        const newTask = document.createElement("li");
        newTask.classList.toggle('li')
        // console.log(newTask)
        newTask.innerHTML = `${inputBox.value} ${createTime}
        <span><i class="fa-regular fa-circle-xmark"></i></span>`;
        todolist.append(newTask);
        array.push(newTask)
        tasksNum.textContent = `${array.length}`;
        inputBox.value = "";
        newTask.querySelector("i").addEventListener("click", remove);
        function remove() {
            newTask.remove()
        }
        // const mmm = newTask
        newTask.addEventListener("click", function (event) {
            // console.log(event)
            if (event.target.className === "li") {
                // console.log(event.target);
                event.target.classList.toggle('checked')
            }
            // else if(event.target.classList ==='checked'){
            //     event.target.classList.toggle(' ');
            // }

        })
    }

}

function Delete() {
    const allLi = Array.from(document.querySelectorAll('li'))
    clearall.addEventListener('click', () => {
        allLi.forEach(item => {
            return todolist.removeChild(item)
        })
    })
}

function getCurrentTime() {
    const currentDate = new Date();
    return currentDate.toLocaleTimeString();
}


