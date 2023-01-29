let AddTast = document.getElementById("add")! as HTMLButtonElement
let TaskForm = document.getElementById("taskForm")! as HTMLFormElement
let content1 = document.getElementById("content1")! as HTMLDivElement
let closeForm = document.getElementById("closeForm")! as HTMLButtonElement
let submitBtn = document.getElementById("create-btn") ! as HTMLButtonElement
let taskName = document.getElementById("taskName") ! as HTMLInputElement
let taskImage = document.getElementById("taskImage") ! as HTMLInputElement
let date = document.getElementById("date") ! as HTMLInputElement
let form = document.getElementById("form")! as HTMLFormElement



interface Tasks{
    id:number
    TaskName: string
    TaskImage: string
    Date: string
}

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
// function add task
const Task:Tasks[]=[]
function addTask(){
    TaskForm.addEventListener("submit",(e)=>{
        e.preventDefault()
        let TaskName = taskName.value
        let TaskImage = taskImage.value
        let Date = date.value

        // validation
        console.log(TaskName, TaskImage, Date)
        if(TaskName=="" || TaskImage=="" ||Date==""){
            const p = document.createElement("p")
            p.textContent ="PLease fill in all the fields"
            p.style.color = "red"
            p.id = "error-message"
            form.insertAdjacentElement("afterbegin", p)
    
            setTimeout(() => {
                
                console.log("hello")
                p.style.display="none"
               
            },5000);
    
        }
        else{
            let singleTask:Tasks = {id :Math.random()*100000, TaskName, TaskImage,Date}
            Task.push(singleTask)
            // showtodos()
        
            console.log(singleTask)
        }  
    })
}
// submitBtn.addEventListener("click", addTask)
addTask()