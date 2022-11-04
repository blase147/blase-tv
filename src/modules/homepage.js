import getMovieCard from './movieCard.js';
import api from './fetchWrapper.js';

const listOfMovies = async () => {
  const data = await fetch('https://api.tvmaze.com/shows/1/episodes?api_key=0hDJ3ZtNQRDdBTeYbSAz7xickoKLyd6A');
  const shows = await data.json();
  let cards = '';
  const allLikes = await api.allLikes();
  shows.forEach((show) => {
    const likes = allLikes.find((item) => item.item_id === show.id)?.likes ?? 0;
    cards += getMovieCard(show.image.original, show.name, show.id, likes);
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
};
export default listOfMovies;