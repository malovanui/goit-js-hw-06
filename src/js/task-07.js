const rangeRef = document.querySelector('#font-size-control');
const spanTextRef = document.querySelector('#text');


const onRangeChange = (event) => { 
    spanTextRef.style.fontSize = `${event.target.value}px`;
};

rangeRef.addEventListener('input', onRangeChange);

