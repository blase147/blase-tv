import './index.css';
import listOfMovies from './modules/homepage.js';
import api from './modules/fetchWrapper.js';

const body = document.getElementById('body');
body.onload = () => { window.listOfMovies = listOfMovies(); };

window.likeitem = api.like;