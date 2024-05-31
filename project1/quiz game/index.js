var quizdata=
[
    {
        question :"Who is the Prime minister of India",
        a:"Narendra Modi",
        b:"ACP pradyuman",
        c:"Rajat dalal",
        d:"Andrew tate",
        correct:"a"
    },
    {
        question :"Who is overall best player choice for Team India",
        a:"MS Dhoni",
        b:"Virat kohli",
        c:"Sachin Tendulkar",
        d:"Rohit Sharma",
        correct:"a"

    },
    {
        question :"What colour is your Bugatti",
        a:"Black",
        b:"MAi gareeb hu",
        c:"Brown",
        d:"White",
        correct:"b"

    },
    {

        question :"Holy festival of Bihar",
        a:"Chatth puja",
        b:"Valentines ",
        c:"Diwali",
        d:"Holi",
        correct:"a"
    }
]
var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a=document.getElementById('a_value')
var option_b=document.getElementById('b_value')
var option_c=document.getElementById('c_value')
var option_d=document.getElementById('d_value')

var submitbtn =document.getElementById('submit')

var currentQuestion=0
var quizScore=0

loadQuiz()

function loadQuiz()
{
    deselect()

    question.innerHTML=quizdata[currentQuestion].question;
    option_a.innerHTML=quizdata[currentQuestion].a;
    option_b.innerHTML=quizdata[currentQuestion].b;
    option_c.innerHTML=quizdata[currentQuestion].c;
    option_d.innerHTML=quizdata[currentQuestion].d;
}
function deselect()
{
    answer.forEach(answer=>answer.checked=false)
}
submitbtn.addEventListener('click', ()=>
{
    var selectedoption;
    answer.forEach(answer=>{
        if(answer.checked)
        {
            selectedoption=answer.id
        }
    })
    if(selectedoption==quizdata[currentQuestion].correct)
    {
        quizScore=quizScore+1
    }
    currentQuestion=currentQuestion+1

    if(currentQuestion==quizdata.length)
        //kindly check the code results are not showing properly
    {
        document.getElementById('quizdiv').innerHTML= '<h1>total score is='+ quizScore +' out of' + quizdata.length +'</h1>'
    }else{
        loadQuiz()
    }
}) 
