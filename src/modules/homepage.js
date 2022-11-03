import {getMovieCard} from './movieCard.js';

window.renderListOfItems = async () => {
  const data = await fetch('https://api.tvmaze.com/shows/1/episodes?api_key=0hDJ3ZtNQRDdBTeYbSAz7xickoKLyd6A');
  const shows = await data.json();
  let cards = ``;
  shows.forEach((show) => {
    cards += getMovieCard(show.image.original, show.name);
  })
  document.querySelector('.card__section').setHTML(cards);
};