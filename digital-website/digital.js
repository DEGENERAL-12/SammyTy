const openSlide = document.getElementById('open-menu');
const closeSlide = document.getElementById('close-btn');
const navlinks = document.querySelector('.nav-links');


// toggle menu
openSlide.addEventListener('click', () => {
    navlinks.style.left = "0";
    navlinks.style.transition = "0.8s ease-in-out";
})

closeSlide.addEventListener('click', () => {
    navlinks.style.left = `${-500 + "px"}`
    navlinks.style.transition = "0.8s ease-out"
});


// const openMenu = document.querySelector('.open-menu')
// const closeMenu = document.querySelector('.close-btn')
// const navlinks = document.querySelector('.nav-links')



// console.log(navlinks)

// // // ------------- open navigation menu ------//////

// // openMenu.addEventListener('onclick', () => {
// //     aside.style.visibility = "visible";
// // })

// // //----- CLOSE SIDEBSR -------//

// // closeMenu.addEventListener('onclick', () => {
// //     navlinks.style.visibility = "hidden"
// // })