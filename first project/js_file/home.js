let condition1 = false

let aside_call = function() {
    let getaside_menu1 = document.querySelector(".aside_menu1");
    let getmenu1ul = document.querySelector(".aside_menu1 ul");
    let getmenu1subhdis = document.querySelector(".aside_menu1 .subhdis");
    let getmenu1links = document.querySelectorAll(".aside_menu1 a");

if (condition1 === false) {
    getaside_menu1.style.width = "150px";
    getaside_menu1.style.height = "500px";
    getmenu1ul.style.visibility = "visible";
    getmenu1subhdis.style.visibility = "visible";


    let menulenght = getmenu1links.length;

    for (let i = 0; i < menulenght; i++) {
         getmenu1links[i].style.opacity = 1;
    }

    condition1 = true;
 } 
else if (condition1 === true) {
    getaside_menu1.style.width = "10px";
    getaside_menu1.style.height = "300px";
    getmenu1ul.style.visibility = "hidden";
    getmenu1subhdis.style.visibility = "hidden";

    let menulenght = getmenu1links.length;

    for (let i = 0; i < menulenght; i++) {
         getmenu1links[i].style.opacity = 0;
   }

   condition1 = false;
 }
}