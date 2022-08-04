function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const colorSpanRef = document.querySelector('.color')
const changeColorButton = document.querySelector('.change-color');

const onChangeColorButtonClick = () => { 
  const randomHex = getRandomHexColor();
  bodyRef.style.backgroundColor = randomHex;
  colorSpanRef.textContent = randomHex;
};

changeColorButton.addEventListener('click', onChangeColorButtonClick);
