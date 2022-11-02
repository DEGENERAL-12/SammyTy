function myfunction() {
    document.getElementById("function").innerHTML = "Sam_Codex";
    document.getElementById("eg_2").innerHTML = "Code Block Example";
}

// varables decleration
{var $st, st, stt;
    $st = 'join';
    st = 'together';} // let variable wont work inside a block {}
    stt = $st + " " + st;
  console.log( stt);
  function a(){
    alert($st);
}

//
let str = "Hello WorLd";
window.alert (str);
console.log (typeof str)

document.getElementById("eg_1").innerHTML = "Hello world";

//if, else conditional statment
let age = 10;
let gender = "male";
if (gender == "male") {
    if (age >= 18) {
        console.log("you are a "+ gender +" and you are "+ age +" years younger")
    }else if(age <= 9){
        alert("you are good to go")
    }else {
        console.log('sorry! you are not allow in')
    }
}else if (gender == "female") {
    if (age >= 15) {
        console.log('you are a ' + gender + ' and above the require age')
    }else if (age <= 15) {
        console.log("you are welcome")
    }else {
        console.log("sorry you are female and older than the require age")
    }
}

//properties and methdos
const names = {
    firstName: "oni",
    middleName: "samuel",
    lastName: "oluwatayo",
    age: 50
};

//function
function firstName(a) {
    let myName = "good mornning my name is " + a;
    return myName
};
var lame = 'sammy'
console.log(firstName(lame))

//calculator practice
function calc() {    
    let e = parseInt(document.querySelector("#val_1").value);
    let f = parseInt(document.querySelector("#val_2").value);
    let op = document.querySelector("#operators").value;
    let calculate;
    
    if (op == 'add') {
        calculate = e + f;
    }else if (op == 'min') {
        calculate = e - f;
    } else if(op == 'Div'){
        calculate = e / f;
    }else if(op == 'mul'){
        calculate = e * f;
    }
    document.querySelector("#registration").innerHTML = calculate
}

//new annonymous function
let conditionStm = false;

let asideSlide = function() {
    let getSidebar = document.querySelector(".aside_menu");
    let asideMenuUl = document.querySelector(".aside_menu ul");
    let getMenuSpan = document.querySelector(".aside_menu span");
    let asideMenuLinks = document.querySelectorAll(".aside_menu a");

if (conditionStm === false) {
    asideMenuUl.style.visibility = "visible";
    getSidebar.style.width = "200px";
    getMenuSpan.style.opacity = "0.5";

    let arraylength = asideMenuLinks.length; 

    for (let i = 0; i < arraylength; i++) {
        asideMenuLinks[i].style.opacity = "1"; 
    }
    
    conditionStm = true;
}
else if (conditionStm === true) {
    asideMenuUl.style.visibility = "hidden";
    getSidebar.style.width = "50px";
    getMenuSpan.style.opacity = "0";

    let arraylength = asideMenuLinks.length; 

    for (let i = 0; i < arraylength; i++) {
        asideMenuLinks[i].style.opacity = "0"; 
    }
    conditionStm = false;
}
}
 
//object prop. and meth. practies  
const car = {
    names: "Mercedes Benz",
    year: 2022,
    model: function() {
        return this.names + " " + this.year + " " + "model";
    } 
};
    console.log(car.model());
//object constructor funcion
    function Register( first, age, gender, married)
    {
        this.firstName = first;
        this.gender = gender;
        this.howOld = age;
        this.statuss = married;
    }

    const customer = new Register("samuel", 20, "Male", "single");
    
    document.querySelector("#registration").innerHTML = "My name is " + customer.firstName
     + " and im " + customer.howOld + " year old." ;
     document.querySelector("#registration").style.color = "blue";
  
     //this binding in object method
     const house = {
        type: "duplex",
        place: "Newyork",
        country: "Usa",
        living : function() {
            return house.type + " " + house.place;
        },
        kitchen: {
            secondType: "bongalo",
            place: "Texas",
            vacancy: "taken",
            //nexted arrays in objects
            car: [
                {name: "toyota", models:["camary", "big daddy", "ciena"]},
                {name: "bmw", models:["venser", "X5", "limozin"]},
                {name: "fiat", models:["ponda", "500"]}
            ]
        }
    };
        console.log(house.living() + " " + house.kitchen.vacancy);

        //return function
        const sum = (a, b) => a + b;

        //prompt example
        function total(paidAmt, tipAmt){
            let tipPercentage = tipAmt / 100;
            let tipTotal = tipPercentage * paidAmt;
            let total1 = sum(paidAmt, tipTotal )
        return alert('your discount is ' + total1);
        }
        console.log(total(200, 20));
         
        //arrow function
        const array = (numbers) => {

            let result = [];

            for( const number of numbers){
                result.push(number * 2)
            }
            return result
        }
        console.log(array([1, 2, 3, 4, 5, 6]))
    // frequeny of numbers
    const arrayFrequency  = (phrases) =>{

        //declare empty object to store data
        let result = {};

        //loop through each letter
        for(const letter of phrases){
            //check if there is letter in result

            if(letter in result){
                result[letter]++
            
            }else{
            result[letter] = 1 
        }
    }
    return result
};

console.log(arrayFrequency('missiccippi'));

