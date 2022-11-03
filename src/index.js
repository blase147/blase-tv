import './index.css';

const hearts = document.querySelectorAll('.heart');
console.dir(hearts);
hearts.forEach((heart) => {
  heart.addEventListener('click', () => {
    if (heart.classList.contains('heart-uncheck')) {
      heart.classList.remove('heart-uncheck');
      heart.classList.add('heart-check');
    } else {
      heart.classList.remove('heart-check');
      heart.classList.add('heart-uncheck');
    }
  });
});