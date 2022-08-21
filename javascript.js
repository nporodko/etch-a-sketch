const container = document.querySelector('#container');
const input = document.querySelector('input')
const btnSize = document.getElementById('size');
const btnClear = document.getElementById('clear');

let squareSize = 16;

function makeGrid (rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
   for (let i = 0; i < (rows * cols); i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'square');
    div.setAttribute('id', i);
    container.appendChild(div);
   }
   changeColor();
}
makeGrid(squareSize, squareSize); 


function clearGrid() {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}

  
function changeColor() {
  let square = document.querySelectorAll('.square')
   input.addEventListener('change', (e)=> {
    input.value = e.target.value;
  })

  for (let j = 0; j <= square.length; j++) {
    if (square[j] !== undefined) {
    square[j].addEventListener('click', ()=>
    square[j].style.backgroundColor = input.value)
      }
    }
  };


btnSize.addEventListener('click', function() {
  let num = prompt('Please enter grid size less than or equal to 100');
  if (num === undefined || num === null || num === '') {
    return;
  }
  else if (num > 100) {
    num = prompt('Number too big! Please enter grid size less than or equal to 100')
  }
  clearGrid();
  makeGrid(num, num);

});

btnClear.addEventListener('click', function() {
  clearGrid();
  makeGrid(squareSize, squareSize);
})



