// дз1
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form_gmail');
  const input = form.querySelector('input[type="email"]');
  const button = form.querySelector('button');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (gmailRegex.test(email)) {
      alert('Почта валидна!');
    } else {
      alert('Введите корректную Gmail почту (например: example@gmail.com)');
    }
  });
});


const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0;
const maxX = parentBlock.clientWidth - childBlock.clientWidth;

function moveRight() {
  childBlock.style.left = `${positionX}px`;

  if (positionX < maxX) {
    positionX++;
    requestAnimationFrame(moveRight);
  }
}

moveRight();

