var nameInput = document.querySelector("input.name");
var familyInput = document.querySelector("input.family");
var ageInput = document.querySelector("input.age");
var emailInput = document.querySelector("input.email");
var taskContainer = document.querySelector("div.task-container");
var users=[];
var counter = 0;
var dltBtn ;

// var log = () => {
//   console.log(nameInput.value);
//   console.log(familyIn]put.value);
//   console.log(ageInput.value);
//   console.log(emailInput.value);
// };

var dlt = (e)=>{
    console.lo
}

function taskMake(){
    var task = document.createElement("div");
    task.id=users[counter].id;
    var userName = document.createElement("h1");
    userName.innerHTML = users[counter].name
    var userFamily = document.createElement("h1")
    userFamily.innerHTML = users[counter].family
    var userAge = document.createElement("h2")
    userAge.innerHTML =users[counter].age
    var userEmail = document.createElement("p")
    userEmail.innerHTML =users[counter].email
    dltBtn = document.createElement("button")
    dltBtn.innerHTML="delete";
    task.appendChild(userName)
    task.appendChild(userFamily)
    task.appendChild(userAge)
    task.appendChild(userEmail)
    task.appendChild(dltBtn)
    taskContainer.appendChild(task)
    dltBtn.addEventListener("click",(a)=>{
        users.forEach(function(e){
            if(e.id == a.target.parentElement.id){
                taskContainer.removeChild(task)
                console.log(users);
            }
        })
    })
}

var clear = ()=>{
    nameInput.value="";
    familyInput.value="";
    ageInput.value="";
    ageInput.value="";
    emailInput.value = ""
}

function register(){
  users[counter] = 
    {
      id:counter,  
      name: nameInput.value,
      family: familyInput.value,
      age: ageInput.value,
      email:emailInput.value,
    //   dltBtn:document.createElement("button")
    };
    taskMake();
  counter++;
  clear();
  console.log(users)

}
