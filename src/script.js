const containerColorPalette = document.getElementById('color-palette');
const boardSizeButton = document.getElementById('generate-board');
const boardSizeInput = document.getElementById('board-size');
const pixelBoard = document.getElementById('bord-container');
const clear = document.querySelector('.btn-clear');
const sizeE1 = document.querySelector('.size');
const size = sizeE1.value;

function populate(size) {
  pixelBoard.style.setProperty('--size', size);
  for (let index = 0; index < size * size; index += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    pixelBoard.appendChild(div);
  }
}

containerColorPalette.addEventListener('click', (event) => {
  const onSelected = document.querySelector('.selected');
  if (event.target.classList.contains('color')) {
    onSelected.classList.remove('selected');
    event.target.classList.add('selected');
  }
});

pixelBoard.addEventListener('click', (event) => {
  const containerSelected = document.querySelector('.selected');
  const copyStyles = window.getComputedStyle(containerSelected);
  event.target.style.backgroundColor = copyStyles.backgroundColor;
});

clear.addEventListener('click', () => {
  const whiteClear = document.querySelectorAll('.pixel');
  for (let index = 0; index < whiteClear.length; index += 1) {
    whiteClear[index].style.backgroundColor = 'white';
  }
});

function removeBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = pixels.length - 1; index >= 0; index -= 1) {
    const element = pixels[index];
    element.remove();
  }
}

function changeBoardSize() {
  boardSizeButton.addEventListener('click', () => {
    const pixel = boardSizeInput.value;
    if (pixel >= 5 && pixel <= 50) {
      removeBoard();
      populate(pixel);
    } else if (pixel > 50) {
      removeBoard();
      populate(50);
    } else if (pixel === '') {
      alert('Board inválido!');
    }
    boardSizeInput.value = '';
  });
}

function generateRGB() {
  const second = Math.random() * 255;
  const third = Math.random() * 255;
  const fourth = Math.random() * 255;
  return `rgb(${second}, ${third}, ${fourth})`;
}
function randomColors() {
  const pixels = document.querySelectorAll('.color');
  pixels[1].style.backgroundColor = generateRGB();
  pixels[2].style.backgroundColor = generateRGB();
  pixels[3].style.backgroundColor = generateRGB();
}
changeBoardSize();
randomColors();
populate(size);
