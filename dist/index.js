"use strict";
let AddTast = document.getElementById("add");
let TaskForm = document.getElementById("taskForm");
let content1 = document.getElementById("content1");
let closeForm = document.getElementById("closeForm");
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
