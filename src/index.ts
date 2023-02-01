import {Tasks} from "./interfaces/Tasks";

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
let act = document.getElementById("act")!

class Streak {
  startDate: Date;
  constructor(startDate: Date) {
    this.startDate = startDate;
  }
}

class StreakDays extends Streak{
private streaks: number = 0;
  streakDays(date: Date){
  let difference = (this.startDate.getTime() - new Date().getTime()) + 1
  return this.streaks =  Math.ceil(difference / (1000 * 3600 * 24));
  
  }
}

class HighestStreaks{
  static highestStreaks(streakArr: number[]){
    const maxStreak: number = Math.max(...streakArr);
    return maxStreak;
  }
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
let Task: Tasks[] = [];


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
    activities.innerHTML = "";

      let singleTask: Tasks = {
        id: Math.random() * 100000,
        TaskName,
        TaskImage,
        Date,
      };
      Task.push(singleTask);
      showTasks()

    }
  });
}
addTask();

// show tasks
function showTasks(){
  if(Task.length==0){
      activities.innerHTML = ""
      const p = document.createElement("p")
      p.textContent="You Don't have any Activity!!!"
      p.style.color='Black'
      p.style.fontSize = "32px"
      activities.insertAdjacentElement("afterbegin",p)
      // p.id = "error-message"
  }else{
      activities.innerHTML =""
      act.style.display = "block"
      // const p = document.createElement("p")
      // p.textContent="Activities"
      // p.style.color='Black'
      // p.style.fontSize = "32px"
      // activities.insertAdjacentElement("afterbegin",p)
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
}

// display pop task
function popTask(id: number) {
    modal.style.display = "block"
    modal.innerHTML = "";
    const task: Tasks[] = Task.filter((a) => a.id === id);
    task.find((a) => {
      let html = `
        <div class="modalTask" id="modalTask" style ="display:flex;flex-direction:column;gap:5px; margin-top:10px;" >                      
                <img src="${a.TaskImage}" style="width:100px;height:100px;margin:5px;">
                <p>${a.Date}</p>  
                <p>${a.TaskName}</p>  
                <p>Streak</p>   
                <div class="taskbtn">
                <button onclick="closeModal()" style="background-color:#ff0000;">Close</button>
                <button onclick="deleteTask(${a.id})" style="background-color:#6c757d;">Delete</button>
                </div>           
        </div>`;

      modal.innerHTML += html;
    });
}

// close modal
function closeModal() {
    modal.style.display = "none"
}
// delete task
function deleteTask(id:number) {
    
  const index = Task.findIndex(a=>a.id===id)
    console.log(index);
    Task.splice(index,1)
    console.log(index)
     modal.style.display = "none"
    showTasks()
}
