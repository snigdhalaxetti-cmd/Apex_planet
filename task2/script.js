const form =
document.getElementById("contactForm");

const result =
document.getElementById("formResult");

form.addEventListener("submit",function(e){

e.preventDefault();

let name =
document.getElementById("name").value.trim();

let email =
document.getElementById("email").value.trim();

let message =
document.getElementById("message").value.trim();

let emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name==="" || email==="" || message==="")
{
result.style.color="red";
result.innerText="Please fill all fields";
return;
}

if(!emailPattern.test(email))
{
result.style.color="red";
result.innerText="Enter valid email";
return;
}

result.style.color="green";
result.innerText="Form submitted successfully!";
form.reset();

});

let tasks =
JSON.parse(localStorage.getItem("tasks"))
|| [];

function saveTasks()
{
localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);
}

function renderTasks()
{
const taskList =
document.getElementById("taskList");

taskList.innerHTML="";

tasks.forEach((task,index)=>{

let li =
document.createElement("li");

li.innerHTML=
`
<span class="${task.completed ? 'completed':''}">
${task.text}
</span>

<div>
<button onclick="toggleTask(${index})">
Done
</button>

<button onclick="deleteTask(${index})">
Delete
</button>
</div>
`;

taskList.appendChild(li);

});

}

function addTask()
{
let input =
document.getElementById("taskInput");

if(input.value.trim()==="")
return;

tasks.push({
text:input.value,
completed:false
});

saveTasks();
renderTasks();

input.value="";
}

function toggleTask(index)
{
tasks[index].completed =
!tasks[index].completed;

saveTasks();
renderTasks();
}

function deleteTask(index)
{
tasks.splice(index,1);

saveTasks();
renderTasks();
}

renderTasks();
