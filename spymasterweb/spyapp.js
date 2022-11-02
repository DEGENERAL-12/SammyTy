const parent1 = document.querySelector("#slider");
const parent2 = document.querySelector("#slider2");
const radios = document.querySelectorAll("input[type=radio]");
const children = parent1.children;
const children2 = parent2.children;
const movetop = document.getElementById("move-top")

let i = 0;
let k = 0;

 // When the user scrolls down 20px from the top of the document, show the button
//  window.onscroll = function () {
//     scrollFunction()
//   };

//   function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       document.getElementById("movetop").style.display = "block";
//     } else {
//       document.getElementById("movetop").style.display = "none";
//     }
//   }

window.onscroll = function () {
        //  scrollFunction()
        console.log('how are you do')
};

//scrowFunction

const scrollFunction = () => {
    const scrollY = window.scrollY;
    if(window.scroll > 20){

    }
}

// the radio checked function
setInterval(() => {
    radios.forEach((rad)=>{
        rad.checked = false
    })
    if(k < children2.length - 1){
        k +=1
        parent2.style.left = `${k * -60}vw`
    }else{
        k = 0
        parent2.style.left = `0vw`
    }
    radios[k].checked = true
}, 6000);

setInterval(() => {
    if(i < children.length - 1){
        i += 1
        parent1.style.left = `${i * -100}vw`
    }else{
        i =0
        parent1.style.left = `0vw`
    }
}, 6000);
// main dashbord slidebar
const handleSlider =(action)=>{
    if(action === 1){
        i = i < children.length-1 ? i+1 : 0
    }else{
        i = i -1 <0 ? children.length-1 : i-1
    }
    parent1.style.left = `${i * -100}vw` 
}

const handleSlider2 =(action)=>{
    radios.forEach((rad,i)=>{
        rad.checked = action == i
    })
    k = action
    parent2.style.left = `${action * -60}vw` 
}