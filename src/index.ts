import { Tasks } from "./interfaces/Tasks";

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
let act = document.getElementById("act")!;
let best = document.getElementById("best")! as HTMLDivElement;
let noBest = document.getElementById("noBest")! as HTMLDivElement;

class Streak {
  startDate: Date;
  constructor(startDate: Date) {
    this.startDate = startDate;
  }
}

class StreakDays extends Streak {
  private streaks: number = 0;
  streakDays(date: Date) {
    let difference = this.startDate.getTime() - new Date().getTime() + 1;
    return (this.streaks = Math.ceil(difference / (1000 * 3600 * 24)));
  }
}

class HighestStreaks {
  static highestStreaks() {
    let bestTask: Tasks = Task[0];

    Task.forEach((task) => {
      if (task.Days > bestTask.Days) {
        bestTask = task;
      }
    });
    return bestTask;
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

let bestStreak: Tasks;

function addTask() {
  TaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let TaskName = taskName.value;
    let TaskImage = taskImage.value;
    let dates = date.value;
    let streak = new StreakDays(new Date(dates));
    // let streakdays = streak.streakDays(new Date());
    let Days = streak.streakDays(new Date());

    // validation
    // console.log(TaskName, TaskImage, dates);
    if (TaskName == "" || TaskImage == "" || dates == "") {
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
        dates,
        Days,
      };
      Task.push(singleTask);
      showTasks();
      bestStreak = HighestStreaks.highestStreaks();
      console.log(bestStreak.Days)

      function showBest(){
      
            best.style.display = "block"
            best.innerHTML = ""
            const taskbest: Tasks = bestStreak
            let html = `
          <div class="task" style ="display:flex;flex-direction:column;gap:5px; margin-top:10px;" onclick="popTask(${taskbest.id})" >                      
                  <img src="${bestStreak.TaskImage}" style="width:98%;height:100px">
                  <p>${bestStreak.dates}</p>  
                  <p>${bestStreak.TaskName}</p>   
                  <p>${bestStreak.Days}</p>  
                              
          </div>`;
          noBest.style.display ="none"
          best.innerHTML += html;
      }
      showBest()
    }
   
  });
}
addTask();
// showBest()

// show tasks
function showTasks() {
  if (Task.length == 0) {
    activities.innerHTML = "";
    const p = document.createElement("p");
    p.textContent = "You Don't have any Activity!!!";
    p.style.color = "Black";
    p.style.fontSize = "32px";
    activities.insertAdjacentElement("afterbegin", p);
  } else {
    activities.innerHTML = "";
    act.style.display = "block";
    Task.forEach((a) => {
      let html = `
                <div class="task" style ="display:flex;flex-direction:column;gap:5px; margin-top:10px;" onclick="popTask(${a.id})" >                      
                        <img src="${a.TaskImage}" style="width:98%;height:100px">
                        <p>${a.dates}</p>  
                        <p>${a.TaskName}</p>   
                        <p>${a.Days}</p>  
                                    
                </div>`;

      activities.innerHTML += html;
    });
  }
  // console.log(Task)
}

// display pop task
function popTask(id: number) {
  modal.style.display = "block";
  modal.innerHTML = "";
  const task: Tasks[] = Task.filter((a) => a.id === id);
  task.find((a) => {
    let streak = new StreakDays(new Date(a.dates));
    let streakdays = streak.streakDays(new Date());
    console.log(streakdays);
    let html = `
        <div class="modalTask" id="modalTask" style ="display:flex;flex-direction:column;gap:5px; margin-top:10px;" >                      
                <img src="${
                  a.TaskImage
                }" style="width:100px;height:100px;margin:5px;">
                <p>${a.dates}</p>  
                <p>${a.TaskName}</p>  
                <p>${Math.abs(streakdays)} Days</p>   
                <div class="taskbtn">
                <button onclick="closeModal()" style="background-color:#ff0000;">Close</button>
                <button onclick="deleteTask(${
                  a.id
                })" style="background-color:#6c757d;">Delete</button>
                </div>           
        </div>`;

    modal.innerHTML += html;
  });
}

// close modal
function closeModal() {
  modal.style.display = "none";
}
// delete task
function deleteTask(id: number) {
  const index = Task.findIndex((a) => a.id === id);
  console.log(index);
  Task.splice(index, 1);
  console.log(index);
  modal.style.display = "none";
  act.style.display = "none";
  best.innerHTML = ""
  noBest.style.display = "block"
  showTasks();
}

// display highest Streak
// function highestStreak(){ 
//   best.style.display = "block"
//   best.innerHTML = ""
//   const taskbest: Tasks = bestStreak
//   let html = `
// <div class="task" style ="display:flex;flex-direction:column;gap:5px; margin-top:10px;" onclick="popTask(${taskbest.id})" >                      
//         <img src="${bestStreak.TaskImage}" style="width:98%;height:100px">
//         <p>${bestStreak.dates}</p>  
//         <p>${bestStreak.TaskName}</p>   
//         <p>${bestStreak.Days}</p>  
                    
// </div>`;
// noBest.style.display ="none"
// best.innerHTML += html;
// }
// highestStreak()

// function highestStreak(){
//   if(Task.length > 0){
//     let bestTask:Tasks =Task[0]

//     Task.forEach(task=>{
//       if (task.Days > bestTask.Days){
//         bestTask = task
//       }

//     })
//     return bestTask
//   }
//   return 0

// }

// function highestStreak() {
//   console.log(HighestStreaks.highestStreaks())
// }
// highestStreak()
// submitBtn.addEventListener("click",()=>{
//   console.log(highestStreak())
// })
