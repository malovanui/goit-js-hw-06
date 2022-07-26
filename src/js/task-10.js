function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('[type="number"]');
const createButtonRef = document.querySelector('[data-create]');
const destroyButtonRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('[id="boxes"]');
let divsArray = [];
 let width = 30;

const createBoxes = (amount) => { 
  for (let i = 0; i < amount; i += 1) { 
  const newDiv = document.createElement('div');
   
    newDiv.style.width = `${width}px`
    newDiv.style.height = `${width}px`
    newDiv.style.backgroundColor = getRandomHexColor();
    width += 10;

  divsArray.push(newDiv);
  }

};



const oncreateButtonRefClick = () => {
  const value = inputRef.value;
  createBoxes(value);
  
  boxesRef.append(...divsArray);
 };


const ondestroyButtonRefClick = () => { 
  boxesRef.innerHTML = '';
  divsArray = [];
  console.log(divsArray)
  width = 10;

};

createButtonRef.addEventListener('click', oncreateButtonRefClick);
destroyButtonRef.addEventListener('click', ondestroyButtonRefClick);