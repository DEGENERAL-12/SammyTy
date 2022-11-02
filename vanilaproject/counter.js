let counter = 0;

//to select value and button
const value = document.querySelector('#value');
const btn = document.querySelectorAll('.btn')

//to select for each of the btn
btn.forEach((btns) => {
    btns.addEventListener('click', (e) => {
        const attribute = e.currentTarget.classList;
        
        if(attribute.contains('decrease')){
             counter--;

        }else if (attribute.contains('increase')){
             counter++ ;

        }else {
            counter = 0
        }
        value.textContent = counter;

        if (counter < 0){
            value.style.color = 'red'
        }

        if(counter > 0){
            value.style.color = 'green'
        }
        if (counter === 0){
            value.style.color = 'black'
        }
    })
});