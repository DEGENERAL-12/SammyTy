const parent = document.querySelector('.parent-slider');
let childrens = parent.children;
const slider = document.querySelector('.slider-text')
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let i = 0;

setInterval (() => {
    
    if(i < childrens.length - 1){
        i++
        parent.style.left = `${i * -700}px`
    }else {
        i = 0
        parent.style.left = `0vw`
    }
}, 6000)

 const activeBtns = (action) => {
    if(action === 1) {
        // let i = 0;

        if(i < childrens.length - 1){
            i++
            parent.style.left = `${i * -700}px`
        }else{
            // i--
            // parent.style.left = `${i * -700}px`
        }
    }
 };

 prev.addEventListener('click', () => {
    activeBtns(-1)
 });

 next.addEventListener('click', () => {
    activeBtns(1)
 });

// ---------------practise-----------///

let pWord = new Array();
 
let words = 'samuel'

for(i=0; i<words.length; i++){
    pWord.push(words[i])
}

console.log(pWord)

let replace = ['how', 'are', 'you', 'doing'];

pWord = replace

console.log(pWord.indexOf('you'))


//------------------------quizeApp-----------------------------//

// const question = [
    
// ] 