let valueRef = document.querySelector('#value');

let counterValue = 0;


const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const onDecrementBthClick = () => {
   valueRef.textContent = counterValue -= 1;
    
 };

 const onIncrementBthClick = () => {
     valueRef.textContent = counterValue += 1;
   
 };

decrementBtn.addEventListener('click', onDecrementBthClick);
incrementBtn.addEventListener('click', onIncrementBthClick);




