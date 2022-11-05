import './index.css';
import './popup.css';
import listOfMovies from './modules/homepage.js';

const body = document.getElementById('body');
body.onload = () => { window.listOfMovies = listOfMovies(); };