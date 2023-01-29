let AddTast = document.getElementById("add")! as HTMLButtonElement
let TaskForm = document.getElementById("taskForm")! as HTMLFormElement
let content1 = document.getElementById("content1")! as HTMLDivElement
let closeForm = document.getElementById("closeForm")! as HTMLButtonElement

// add button
AddTast.addEventListener("click", ()=>{
 TaskForm.style.display = "block"
 TaskForm.style.display = "flex"
content1.style.display = "none"
})
// close button
closeForm.addEventListener("click", ()=>{
    TaskForm.style.display = "none"
    content1.style.display = "block"
    content1.style.display = "flex"
    
})