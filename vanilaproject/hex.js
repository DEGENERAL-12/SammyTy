const hex = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    console.log(getRandomNumber());
    let hexColor = '#';

    for (i = 0; i < 6; i++){

        hexColor += hex[getRandomNumber()];
    }
    
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

const getRandomNumber = () => {
    return Math.floor(Math.random()*hex.length);
}
