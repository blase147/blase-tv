import getMovieCard from './movieCard.js';

const listOfMovies = async () => {
  const data = await fetch('https://api.tvmaze.com/shows/1/episodes?api_key=0hDJ3ZtNQRDdBTeYbSAz7xickoKLyd6A');
  const shows = await data.json();
  let cards = '';
  shows.forEach((show) => {
    cards += getMovieCard(show.image.original, show.name);
  });
  document.querySelector('.card__section').innerHTML = cards;
  const hearts = document.querySelectorAll('.heart');
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

  const btn = document.querySelector('.card__comment');
  btn.addEventListener('click', () => {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
    const span = document.querySelector('.close-comment-popup');
    span.onclick = () => {
      modal.style.display = 'none';
    };
  });
};
export default listOfMovies;