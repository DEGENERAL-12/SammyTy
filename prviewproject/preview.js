const newReels = [
    {
        id: 1,
        name: "blessing johnson",
        newImage: "",
        newJob: "full stack debeloper",
        newIntro: "My name is johnson Blessing and i am a programer with 6 years in the tech industry and i hope  bring + '<br>' + the best out of what i amdoing so help me God",
    },

    {
        id: 1,
        newName: "olawatayo victor",
        newImage: "",
        newJob: "front end developer",
        newIntro: "My name is olawatayo salamtrc and i am a programer with 6 years in the tech industry and i hope  bring + '<br>' + the best out of what i amdoing so help me God",
    },

    {
        id: 1,
        name: "Eziekel olarewaju",
        newImage: "",
        newJob: "back end developer",
        newIntro: "My name is Eziekel olarewaju and i am a programer with 6 years in the tech industry and i hope  bring + '<br>' + the best out of what i amdoing so help me God",
    },

    { 
        id: 1,
        name: "dammy scort",
        newImage: "",
        newJob: "software developer",
        newIntro: "My name is dammy scortand i am a software developer with 6 years in the tech industry and i hope  bring + '<br>' + the best out of what i amdoing so help me God",
    },

    {
        id: 1,
        name: "well isaac",
        newImage: "",
        newJob: "Cybersecurity",
        newIntro: "My name is well isaac and i am a cyberSecurity engineer with 6 years in the tech industry and i hope  bring + '<br>' + the best out of what i amdoing so help me God",
    },
];

//select items
const img = document.getElementById('person-image');
const job = document.getElementById('job');
const authour = document.getElementById('authour');
const intro = document.getElementById('intro');

const prevbutton = document.querySelector('.prev-btn');
const nextbutton = document.querySelector('  .next-btn');
const randombtn = document.querySelector('.random-btn');

//set startin item
let newItem = 0

//window content loeaded

window.addEventListener('DOMContentLoaded', () => {
  eachArrays()
   
});

//function thay passs in each arays
const eachArrays = () => {
    const newreel = newReels[newItem];

    img.src = newreel.newImage;
    authour.textContent = newreel.name;
    job.textContent = newreel.newJob;
    intro.textContent = newreel.newIntro;
}

//prview btn action
nextbutton.addEventListener('click', () => {
    newItem++

    if(newItem > newReels.length - 1){
        newItem = 0;
    }
    eachArrays(newItem)
});

prevbutton.addEventListener('click', () => {
    newItem--

    if(newItem < 0){
        newItem = newReels.length - 1
    }
    eachArrays(newItem)
});

randombtn.addEventListener('click', () => {
    newItem = Math.floor(Math.random() * newReels.length)
    eachArrays(newItem)
})

