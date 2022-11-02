const quizzQuestion =[
    {
        question1: 'what is the acronym of HTML?',
        a: 'Hypertext Markup Language',
        b: 'Hypertext Mark Language',
        c: 'Hypertext Marckup Language',
        d: 'Hypertext mattew language',
        correct: 'A'
    },

    {
        question1: 'whats is the accrony of css?',
        a: 'Cascading Stylesheet',
        b: 'cascading styleshit',
        c: 'cascading styling',
        d: 'cascade stylesheet',
        correct: 'A'
    },

    {
        question1: 'what are primitivive value?',
        a: 'value with no properties and value',
        b: 'values with no properties and principle',
        c: 'values with no properties and methods',
        d: 'Hvalues with both properties and methods ',
        correct: 'C'
    },

    {
        question1: 'is javascript a programming language?',
        a: 'no',
        b: 'yes',
        c: 'i dont know',
        d: 'all of the above',
        correct: 'B'
    },

    
];
//calling each element from the DOM

const question = document.getElementById('heading2');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');
const ans = document.querySelectorAll('.ans');
const prev = document.querySelector('.prevBtn');


let  counter = 0; 

//callingeventlister
window.addEventListener('DOMContentLoaded', () => {
    displayFunction()
})
// the display fuction
const displayFunction = () => {
 
    deSelected()

    let item = quizzQuestion[counter];

    question.textContent = item.question1
    a_text.textContent = item.a
    b_text.textContent = item.b
    c_text.textContent = item.c
    d_text.textContent = item.d
};


const deSelected = () =>{
    ans.forEach(function(answerChecked){
        answerChecked.checked = false
    });
};

const getSelected = () => {
    let answer;

    ans.forEach(function(answerChecked){
        if(answerChecked.checked){
            answer = answerChecked.id
        }
    });console.log(answer)
    return answer
}
    
let score = 0

submit.addEventListener('click', function(){
    let answer = getSelected();
    let item =  quizzQuestion[counter];
    const result = document.querySelector('.result');

    const prev = document.querySelector('.prevBtn')

    //caculating the total amount of score
    if(answer === item.correct){
      score++;
    }

    //go to the next question onlt if answered
    if(answer){
        counter++

        if (counter < quizzQuestion.length) {
            displayFunction();

            prev.style.visibility = 'visible';

           }else{
               result.innerHTML = `<h1> You Scored ${score} of ${quizzQuestion.length}`

               result.style.textAlign = 'center'
               result.style.backgroundColor = '#f3f3f3'

           };
    };
    
})



//todo previous button
prev.addEventListener('click', () => {

    let item = quizzQuestion[counter]
    let answer = getSelected();
    
        counter--
        if (counter >= 0){

            displayFunction()
         score--
        }else{counter = 0}

});