const questions = [

{
question:"Which language is used to structure webpages?",
answers:["HTML","CSS","JavaScript","Python"],
correct:"HTML"
},

{
question:"Which CSS feature is used for flexible layouts?",
answers:["Grid","Flexbox","Margin","Padding"],
correct:"Flexbox"
},

{
question:"Which JavaScript method is used for API calls?",
answers:["request()","get()","fetch()","receive()"],
correct:"fetch()"
},

{
question:"Which CSS technique helps build responsive designs?",
answers:["Loops","Media Queries","Arrays","Objects"],
correct:"Media Queries"
}

];

const questionElement =
document.getElementById("question");

const answerButtons =
document.getElementById("answer-buttons");

const nextBtn =
document.getElementById("next-btn");

const result =
document.getElementById("result");

const progressBar =
document.getElementById("progressBar");

let currentQuestion = 0;
let score = 0;

function startQuiz(){
showQuestion();
}

function showQuestion(){

resetState();

let q =
questions[currentQuestion];

questionElement.innerText =
q.question;

progressBar.style.width =
((currentQuestion)
/
questions.length)*100 + "%";

q.answers.forEach(answer=>{

const button =
document.createElement("button");

button.innerText = answer;

button.classList.add("answer-btn");

button.addEventListener("click",
()=>selectAnswer(button,answer));

answerButtons.appendChild(button);

});

}

function resetState(){

nextBtn.style.display="none";

answerButtons.innerHTML="";

}

function selectAnswer(button,answer){

let correct =
questions[currentQuestion].correct;

Array.from(answerButtons.children)
.forEach(btn=>btn.disabled=true);

if(answer===correct){

button.classList.add("correct");

score++;

}
else{

button.classList.add("wrong");

}

nextBtn.style.display="block";

}

nextBtn.addEventListener("click",()=>{

currentQuestion++;

if(currentQuestion < questions.length){

showQuestion();

}
else{

showResult();

}

});

function showResult(){

questionElement.innerText =
"Quiz Completed";

answerButtons.innerHTML="";

progressBar.style.width="100%";

result.innerHTML = `
Your Score: ${score}/${questions.length}
<br><br>
<button onclick="location.reload()">
Restart Quiz
</button>
`;

}

startQuiz();

/* API FETCH */

document.getElementById("jokeBtn")
.addEventListener("click",async()=>{

const joke =
document.getElementById("joke");

joke.innerText="Loading joke...";

try{

const response =
await fetch(
"https://official-joke-api.appspot.com/random_joke"
);

const data =
await response.json();

joke.innerHTML =
`${data.setup}<br><br>${data.punchline}`;

}
catch{

joke.innerText =
"Unable to fetch joke.";

}

});
