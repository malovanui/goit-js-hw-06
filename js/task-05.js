const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
const onInput = () => { 
    spanRef.textContent = inputRef.value;
};

inputRef.addEventListener('input', onInput);