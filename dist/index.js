"use strict";
let AddTast = document.getElementById("add");
let TaskForm = document.getElementById("taskForm");
let content1 = document.getElementById("content1");
let closeForm = document.getElementById("closeForm");
let submitBtn = document.getElementById("create-btn");
let taskName = document.getElementById("taskName");
let taskImage = document.getElementById("taskImage");
let date = document.getElementById("date");
let form = document.getElementById("form");
let activities = document.getElementById("activities");
// add button
AddTast.addEventListener("click", () => {
    TaskForm.style.display = "block";
    TaskForm.style.display = "flex";
    content1.style.display = "none";
});
// close button
closeForm.addEventListener("click", () => {
    TaskForm.style.display = "none";
    content1.style.display = "block";
    content1.style.display = "flex";
});
// function add task
const Task = [];
function addTask() {
    TaskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let TaskName = taskName.value;
        let TaskImage = taskImage.value;
        let Date = date.value;
        // validation
        console.log(TaskName, TaskImage, Date);
        if (TaskName == "" || TaskImage == "" || Date == "") {
            const p = document.createElement("p");
            p.textContent = "PLease fill in all the fields";
            p.style.color = "red";
            p.id = "error-message";
            form.insertAdjacentElement("afterbegin", p);
            setTimeout(() => {
                console.log("hello");
                p.style.display = "none";
            }, 5000);
        }
        else {
            let singleTask = { id: Math.random() * 100000, TaskName, TaskImage, Date };
            Task.push(singleTask);
            console.log(singleTask);
            activities.innerHTML = "";
            Task.forEach((a) => {
                let html = `
                <div class="task" style ="display:flex;flex-direction:column;gap:5px; margin-top:10px;">                      
                        <img src="${a.TaskImage}" style="width:98%;height:100px">
                        <p>${a.Date}</p>  
                        <p>${a.TaskName}</p>                     
                </div>`;
                activities.innerHTML += html;
            });
        }
    });
}
// submitBtn.addEventListener("click", addTask)
addTask();
// <div class="btn">
// <button onclick="">Close</button>
// <button onclick="">Delete</button>
// </div>