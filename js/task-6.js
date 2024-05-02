function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  const baseSize = 30;
  boxes.innerHTML = "";
  const boxArray = [];
  for (let i = 0; i < amount; i++) {
    const newSize = baseSize + i * 10;
    const box = document.createElement("div");
    box.style.width = `${newSize}px`;
    box.style.height = `${newSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxArray.push(box);
  }
  boxes.append(...boxArray); 
}

function destroyBoxes() {
  boxes.innerHTML = "";
}


buttonCreate.addEventListener("click", createAction);
function createAction() {
  const amount = input.value;
  createBoxes(amount);
  input.value = "";
  };

buttonDestroy.addEventListener("click", destroyBoxes);

