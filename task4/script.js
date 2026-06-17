/* TO DO LIST */

let tasks =
JSON.parse(
localStorage.getItem("tasks")
) || [];

function saveTasks(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}

function renderTasks(){

let list =
document.getElementById("taskList");

list.innerHTML="";

tasks.forEach((task,index)=>{

let li =
document.createElement("li");

li.innerHTML=
`${task}
<button onclick="deleteTask(${index})">
Delete
</button>`;

list.appendChild(li);

});

}

function addTask(){

let input =
document.getElementById("taskInput");

if(input.value==="")
return;

tasks.push(input.value);

saveTasks();
renderTasks();

input.value="";

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();
renderTasks();

}

renderTasks();

/* PRODUCTS */

const products=[

{
name:"Laptop",
category:"Laptop",
price:60000
},

{
name:"Phone",
category:"Phone",
price:25000
},

{
name:"Gaming Laptop",
category:"Laptop",
price:90000
}

];

function displayProducts(data){

const container=
document.getElementById(
"productContainer"
);

container.innerHTML="";

data.forEach(product=>{

container.innerHTML+=`

<div class="product">

<h3>${product.name}</h3>

<p>Category:
${product.category}</p>

<p>Price:
₹${product.price}</p>

</div>

`;

});

}

displayProducts(products);

document
.getElementById("filter")
.addEventListener("change",applyFilters);

document
.getElementById("sort")
.addEventListener("change",applyFilters);

function applyFilters(){

let filtered=
[...products];

let category=
document.getElementById("filter").value;

let sort=
document.getElementById("sort").value;

if(category!=="all"){

filtered=
filtered.filter(
p=>p.category===category
);

}

if(sort==="low"){

filtered.sort(
(a,b)=>a.price-b.price
);

}

if(sort==="high"){

filtered.sort(
(a,b)=>b.price-a.price
);

}

displayProducts(filtered);

}
