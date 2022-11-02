const questions = [
    {
        question: 'Q1. what is the acronym of HTML',
        a: 'hypertext marckup language',
        b: 'hypertext markup language',
        c: 'hypertext mark language',
        d: 'hypertext markcup language',
        correct: 'b'
    },
    
    {
        question: 'Q2. what are javascript program',
        a: 'They are list of programming statment',
        b: 'They are list of intruction to be excecuted by a computer',
        c: 'They are set of rules on how javascript are constructed',
        d: 'They are set of keywords',
        correct: 'a'
    },

    {
        question: 'Q3. when was the "let" keyword introduced',
        a: 'By mosh hamadin in  2000',
        b: 'By Daniel krotting in 2005',
        c: 'By Es6 in 2015',
        d: 'By Es7 in 2000',
        correct: 'c'
    },

    {
         question: 'what are varriables?',
         a: 'They are javascript syntax',
         b: 'They are keywords for declaration',
         c: 'They are javacript program',
         d: 'All of the above',
         correct: 'b'
     },

    {
        question: 'Q4. what are primitive value?',
        a: 'values that have both method and properties',
        b: 'values that have no properties or method',
        c: 'values that have arrays and object ',
        d: 'all of the above',
        correct: 'b'
    },
    
    {
        question: 'Q5. select the correct syntax for declaring a function',
        a: 'const functionName = () => {}',
        b: 'functionName(){}',
        c: 'function functionName() {} ',
        d: 'all of the above',
        correct: 'd'
    },

    {
        question: 'is javascript a programing language?',
        a: 'i don`t know',
        b: 'no its not',
        c: 'i`m contemplating about it',
        d: 'yes',
        correct: 'd'
    }
];

//get the element from the DOM with their ID name
const heading2 = document.getElementById('heading2');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit')
let ans = document.querySelectorAll('.ans')
let counter = 0;

//calling eventListener to display 
window.addEventListener('DOMContentLoaded', function(){
    quizzLoader()
} )
//displayfunction
const quizzLoader = () => {

//item to loop rhough the arrays 
    let item = questions[counter];

// deSelected();

//getting text from the html with the IdName and asiging it to javascript object
    heading2.textContent = item.question;
    a_text.textContent = item.a;
    b_text.textContent = item.b;
    c_text.textContent = item.c;
    d_text.textContent = item.d;
};


//to know the unchoosen answer
// const deSelected = () => {
//     ans.forEach(function(answerChecked){
//         answerChecked.checked = false
//     })
// };

// // to know the choosen answer
// const getSelected = () => {
//         let answer;
        
//         ans.forEach(function(answerChecked){
//             if(answerChecked.checked){
//                 answer = answerChecked.id;
//             }console.log(answer)
//         })
//         return answer
//     };
//     console.log(getSelected())
// let score = 0;

submit.addEventListener('click', function(){

    counter++; 
    quizzLoader()

    // let answer = getSelected();
    // let result = document.querySelector('.result');

    // // // check if you choose the correct answer
    // // if (answer === questions[counter].correct){
    // //     score++
    // // }

    // if(getSelected()){
    //     counter++; 

    //     if(counter < questions.length){
    //         quizzLoader();

    //     }else{
    //         result.innerHTML = `<h1> You score ${score} of ${questions.length} </h1>`
    //     }
    // }
    });


    // const priviousQus = () => {
    //     let  
    // }