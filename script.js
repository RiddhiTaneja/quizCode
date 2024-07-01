const questions = [
    {
        question: "What is my Name?",
        answers:[
            {text:"Riddhi Arora" , correct: false},
            {text:"Riddhi Taneja" , correct: true},
            {text:"Riddhi " , correct: false},
            {text:"Riddhi chahhbra" , correct: false}
        ]
    },
    {
        question: "What is my Fav colour?",
        answers:[
            {text:"Blue" , correct: false},
            {text:"Pink" , correct: false},
            {text:"Black " , correct: true},
            {text:"Yellow" , correct: false}
        ]
    },
    {
        question: "What is my Fav Food?",
        answers:[
            {text:"Chicken" , correct: true},
            {text:"Dhosa" , correct: false},
            {text:"Idli" , correct: false},
            {text:"Dal-roti" , correct: false}
        ]
    },
    {
        question: "What is my Current Relationship status?",
        answers:[
            {text:"Yes" , correct: true},
            {text:"No" , correct: false},
            {text:"Not sure" , correct: false},
            {text:"I dont think so" , correct: false}
        ]
    }
    ,
    {
        question: "what do i do to relax?",
        answers:[
            {text:"Listen Music" , correct: false},
            {text:"Talk to my bff" , correct: false},
            {text:"Take a nap" , correct: false},
            {text:"Go outside" , correct: true}
        ]
    } ,
    {
        question: "what is my Dream Car?",
        answers:[
            {text:"Swift" , correct: false},
            {text:"Ferari" , correct: false},
            {text:"Thar" , correct: true},
            {text:"Scorpio" , correct: false}
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0 ;
let score = 0 ;
  
function startQuiz(){
    currentQuestionIndex= 0;
    score =0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1; // we need question no is also
    questionElement.innerHTML = questionNo +" . " + currentQuestion.question;


    currentQuestion.answers.forEach(answer =>{
        const button =document.createElement("button") //one button tag and save varaiable as button
        button.innerHTML = answer.text; // jo b answer shw hoye vo text me hoye kuki hmne text diya h
        button.classList.add('btn'); //btn class name add kra h 
        answerButtons.appendChild(button); // asnwer button div me diya  h isliye
if(answer.correct){
    button.dataset.correct = answer.correct;
}
        button.addEventListener("click" , selectAnswer);
    });

}


function resetState(){
    nextButton.style.display='none';
while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
}
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct");
score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }
        button.disabled = true;
    });
    nextButton.style.display = "block"; 
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display ="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
    handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();