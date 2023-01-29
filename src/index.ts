let AddTast = document.getElementById("add")! as HTMLButtonElement;
let TaskForm = document.getElementById("taskForm")! as HTMLFormElement;
let content1 = document.getElementById("content1")! as HTMLDivElement;
let closeForm = document.getElementById("closeForm")! as HTMLButtonElement;
let submitBtn = document.getElementById("create-btn")! as HTMLButtonElement;
let taskName = document.getElementById("taskName")! as HTMLInputElement;
let taskImage = document.getElementById("taskImage")! as HTMLInputElement;
let date = document.getElementById("date")! as HTMLInputElement;
let form = document.getElementById("form")! as HTMLFormElement;
let activities = document.getElementById("activities")! as HTMLDivElement;
let modal = document.getElementById("modal")! as HTMLDivElement;

interface Tasks {
  id: number;
  TaskName: string;
  TaskImage: string;
  Date: string;
}

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
const Task: Tasks[] = [];
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
    } else {
      let singleTask: Tasks = {
        id: Math.random() * 100000,
        TaskName,
        TaskImage,
        Date,
      };
      Task.push(singleTask);

      console.log(singleTask);
      activities.innerHTML = "";
      Task.forEach((a) => {
        let html = `
                <div class="task" style ="display:flex;flex-direction:column;gap:5px; margin-top:10px;" onclick="popTask(${a.id})" >                      
                        <img src="${a.TaskImage}" style="width:98%;height:100px">
                        <p>${a.Date}</p>  
                        <p>${a.TaskName}</p>     
                                    
                </div>`;

        activities.innerHTML += html;
      });
    }
  });
}
addTask();

// display pop task
function popTask(id: number) {
    modal.innerHTML = "";
    const index = Task.findIndex((a) => a.id === id);
    console.log(index);

    const task: Tasks[] = Task.filter((a) => a.id === id);
    task.find((a) => {
      let html = `
        <div class="modalTask" id="modalTask" style ="display:flex;flex-direction:column;gap:5px; margin-top:10px;" >                      
                <img src="${a.TaskImage}" style="width:100px;height:100px;margin:5px;">
                <p>${a.Date}</p>  
                <p>${a.TaskName}</p>  
                <p>Streak</p>   
                <div class="btn">
                <button onclick="">Close</button>
                <button onclick="">Delete</button>
                </div>           
        </div>`;

      modal.innerHTML += html;
    });
    console.log("hey");
}
// close modal
function
