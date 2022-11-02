const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025", "#orange"]
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    //get random number between 0 - 3 of the colors[]
    console.log(getRandomNumber())
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    
 });

 const getRandomNumber = () => {
     return Math.floor(Math.random()*colors.length);
 }



// //data structures and algorithm search 
// const linearSearch = (list, target) => {

//     // get the total amount of the list length
//     let  index = list.length;

//     //
//     for (i = 0; i < index; i++){
//         //check if the loop condition is true
//         if(list[i] === target){
//             // return the index number of the target
//             return i
//         }
//     }
    
// }  

// const varefy = (index) => {
//     let none;

//     if(index != none){
//         console.log(`the index number of 9 is ${index}`)
//     } 
//     else{
//         console.log("the index number is not avalable")
//     }
// }


// let result = linearSearch([3, 2, 6, 4, 5, 7, 8, 9, 10, 77], 77)

// varefy(result)



// // binary search

const binarySearch = (list, target) => {

    let first = list[0];
    let last =  list.length - 1;

    while (first <= last ) {

         const middle = Math.floor(first + last / 2);
         console.log(middle)

          if(list[middle] === target){
            return middle

          }else if (list[middle] < target) {
            last = middle + 1
             
          }else{
            first = middle - 1

          }
    }
    
}


const test = (index) => {

    let none;

    if(index != none){

        console.log(`the index number is ${index}`)
    }else{
        console.log('not available')
    }
};

let index = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8);

test(index)