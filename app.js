// the main form inputs decleration***************************************
var taskNameInput = document.querySelector("input.taskNameInput");
var taskDayInput = document.querySelector("input.taskDateDay");
var taskMonthInput = document.querySelector("input.taskDateMonth");
var taskYearInput = document.querySelector("input.taskDateYear");
var taskTimeMinuteInput = document.querySelector("input.taskTimeMinute");
var taskTimeHourInput = document.querySelector("input.taskTimeHour");
var taskCaptionInput = document.querySelector("input.taskCaptionInput");

// the main form buttons decleration****************************************t
var createTaskBtn = document.querySelector("button.taskCreate");
// tasks container
var tasksContainer = document.querySelector("div.tasks");
// overlays buttons
var deleteYesBtn = document.getElementById("yesBtn");
var deleteNoBtn = document.getElementById("noBtn");
var editSubmit = document.getElementById("editSubmit");
var editCancel = document.getElementById("editCancel");
// overlays declaring
var deleteOverlay = document.getElementById("deleteOverlay");
var deleteBar = document.querySelector("div.deleteBar");
var editOverlay = document.querySelector("div.edit-overlay");
var taskWait = document.getElementById("taskWait")
// an array for tasks
var tasks = [];
var counter = 0;
var dltBtn;
var timer;
// edit inputs decleration

var taskNameEdit = document.querySelector("input.taskNameEdit");
var taskDateDayEdit = document.querySelector("input.taskDateDayEdit");
var taskDateMonthEdit = document.querySelector("input.taskDateMonthEdit");
var taskDateYearEdit = document.querySelector("input.taskDateYearEdit");
var taskTimeHourEdit = document.querySelector("input.taskTimeHourEdit");
var taskTimeMinuteEdit = document.querySelector("input.taskTimeMinuteEdit");
var captionEdit = document.querySelector("input.captionEdit");
console.log(taskNameEdit);
console.log(taskMonthInput);
// the method helps to validate the information that we give from user

var validation = () => {
  if (taskNameInput.value == "") {
    alert("وارد کردن مقدار نام فعالیت الزامیست");
  }

  else if (isNaN(taskDayInput.value) || isNaN(taskMonthInput.value) || isNaN(taskYearInput.value)) {
    alert("تاریخ وارد شده معتبر نمی باشد");
    taskDayInput.value = "";
    taskMonthInput.value = "";
    taskYearInput.value = "";
  }

  else if (
    Number(taskDayInput.value) > 31 ||
    Number(taskDayInput.value) < 1 ||
    Number(taskMonthInput.value) > 12 ||
    Number(taskMonthInput.value) < 1
  ) {
    alert("تاریخ وارد شده معتبر نمی باشد");
    taskDayInput.value = "";
    taskMonthInput.value = "";
    taskYearInput.value = "";
  }

  else if (isNaN(taskTimeHourInput.value) || isNaN(taskTimeMinuteInput.value)) {
    alert("لطفا مقادیر ساعت رابه صورت عددی وارد کنید  ");
    taskTimeHourInput.value = "";
    taskTimeMinuteInput.value = "";
  }
  else if (
    taskTimeHourInput > 23 ||
    taskTimeHourInput < 0 ||
    taskTimeMinuteInput > 59 ||
    taskTimeMinuteInput < 00
  ) {
    alert("فرمت زمان وارد شده درست نمی باشد");
    taskTimeHourInput.value = "";
    taskTimeMinuteInput.value = "";
  }else{
    makeTask();
  }
};

var clear = () => {
  taskNameInput.value = "";
  taskDayInput.value = "";
  taskMonthInput.value = "";
  taskYearInput.value = "";
  taskTimeMinuteInput.value = "";
  taskTimeHourInput.value = "";
  taskCaptionInput.value = "";
};

var close = () => {
  deleteOverlay.style.scale = 0;
  clearTimeout(timer);
  deleteBar.classList.remove("addAnim");
  editOverlay.style.scale=0;
};

var taskDomMake = () => {
  // making a task by dom and the sacved array
  var task = document.createElement("div");
  task.classList.add("task");
  task.id = tasks[counter].id;
  // task image
  var taskImg = document.createElement("div");
  taskImg.classList.add("task-img");
  //making  task body and info*************************
  var taskBody = document.createElement("div");
  taskBody.classList.add("task-body");
  var taskName = document.createElement("h3");
  taskName.innerHTML = tasks[counter].name;
  var taksDate = document.createElement("h4");
  taksDate.innerHTML = tasks[counter].date;
  var taskTime = document.createElement("h5");
  taskTime.innerHTML = tasks[counter].time;
  // making caption section of the task*****************
  var taskCaption = document.createElement("div");
  taskCaption.classList.add("taskCaption");
  var taskCaptionText = document.createElement("p");
  taskCaptionText.innerHTML = tasks[counter].caption;
  // making taskfooter-section***************************
  var taskFooter = document.createElement("div");
  taskFooter.classList.add("task-footer");
  taskFooter.id=counter;
  var taskDeleteBtn = document.createElement("button");
  taskDeleteBtn.classList.add("taskBtn", "resetBtn");
  taskDeleteBtn.innerHTML = " حذف";
  var taskEditBtn = document.createElement("button");
  taskEditBtn.classList.add("taskBtn", "makeBtn");
  taskEditBtn.innerHTML = " ویرایش";


  // final making the tasks
  taskCaption.appendChild(taskCaptionText);
  taskBody.appendChild(taskName);
  taskBody.appendChild(taksDate);
  taskBody.appendChild(taskTime);
  taskFooter.appendChild(taskEditBtn);
  taskFooter.appendChild(taskDeleteBtn);
  task.appendChild(taskImg);
  task.appendChild(taskBody);
  task.appendChild(taskFooter);
  task.appendChild(taskCaption);
  tasksContainer.appendChild(task);
// ********************************
taskWait.style.display="none"
// **********************************
  taskDeleteBtn.addEventListener("click", (a) => {
    tasks.forEach(function (e) {
      if (e.id == a.target.parentElement.id) {
        timer = setTimeout(close, 5000);
        deleteOverlay.style.scale = 1;
        deleteBar.classList.add("addAnim");
        deleteYesBtn.addEventListener("click", () => {
          tasksContainer.removeChild(task);
          close();
        });
        deleteNoBtn.addEventListener("click", close);
      }
    });
  });
  taskEditBtn.addEventListener("click", (a) => {
    tasks.forEach(function (e) {
      if (e.id == a.target.parentElement.id) {
        console.log(e.id)
        console.log(a.target.parentElement.id)
        editOverlay.style.scale = 1;
        ediiit();
      }
      
    });
  });
  function ediiit(){
    editSubmit.addEventListener("click", (e) => {
      // tasks[e.id].name = taskNameEdit.value;
      // e.date =
      //   taskDateDayEdit.value +
      //   " / " +
      //   taskDateMonthEdit.value +
      //   " / " +
      //   taskDateYearEdit.value;
      // e.time = taskTimeHourEdit.value + " / " + taskTimeMinuteEdit.value;
      // e.caption = captionEdit.value;
      //  edit the context in the dom
      if(e.id==task.id){
      console.log(e.id + a.target.parentElement.id)
      }else{
        taskName.innerHTML= taskNameEdit.value;
        close();
      }
    });
  }
  editCancel.addEventListener('click',close);
  

  task.addEventListener('mouseover' , ()=>{
    taskCaption.classList.add("captionShow")
  })
  task.addEventListener("mouseout",()=>{
    taskCaption.classList.remove("captionShow")
  })
};

var makeTask = () => {
  // making an array of tasks in the storage
  tasks[counter] = {
    id: counter,
    name: taskNameInput.value,
    date:
      taskDayInput.value +
      " / " +
      taskMonthInput.value +
      " / " +
      taskYearInput.value,
    time: taskTimeMinuteInput.value + " : " + taskTimeHourInput.value,
    caption: taskCaptionInput.value
  };
  taskDomMake();
  counter++;
  clear();
  console.log(tasks);
};

var createTask = () => {
  validation();
};

createTaskBtn.addEventListener("click", createTask);
