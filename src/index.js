import './index.css';
import listOfMovies from './modules/homepage.js';
import api from './modules/fetchWrapper.js';
import getCommentBox from './modules/comments.js';
import getReserveBox from './modules/reservation.js';

const body = document.getElementById('body');
body.onload = () => { window.listOfMovies = listOfMovies(); };

window.likeitem = api.like;

// Show contact
window.showContact = () => {
  document.querySelector('#hero').className = 'none';
  document.querySelector('#about').className = 'none';
  document.querySelector('#contact').className = 'flex';
};

// Show about
window.showAbout = () => {
  document.querySelector('#hero').className = 'none';
  document.querySelector('#contact').className = 'none';
  document.querySelector('#about').className = 'flex';
};

// Show Home
window.showHome = () => {
  document.querySelector('#about').className = 'none';
  document.querySelector('#contact').className = 'none';
  document.querySelector('#hero').className = 'block';
};

// Show comment box
window.showComments = async (id) => {
  const poster = document.querySelector(`#poster-${id}`).src;
  const title = document.querySelector(`#title-${id}`).innerText;
  const comments = await api.allComments(id);
  const AllComment = comments.map((comment) => `<div class="comment">
    <div class="date">${comment.creation_date}</div>
    <div class="user-name">${comment.username}</div>
    <div class="comment-text">${comment.comment}</div>
</div>`).join('');

  const commentBox = getCommentBox(poster, title, id);
  document.querySelector('#comment-section').innerHTML = commentBox;
  document.getElementById('comment-box').classList.remove('none');
  document.getElementById('comment-box').classList.add('block');
  if (AllComment) {
    document.querySelector('.recent-comment__history').insertAdjacentHTML('beforeend', AllComment);
  }
  document.querySelector('.total-comments').innerHTML = `(${comments.length})`;
};

window.closeComment = () => {
  document.getElementById('comment-box').classList.add('none');
  document.getElementById('comment-box').classList.remove('block');
  document.querySelector('#comment-section').innerHTML = '';
};

window.addNewComment = async (id) => {
  const name = document.querySelector('#name').value;
  const commentText = document.querySelector('#comment-holder').value;
  if (name === '' || commentText === '') {
    return;
  }
  document.querySelector('#name').value = '';
  document.querySelector('#comment-holder').value = '';
  await api.comment(id, name, commentText);
};

// Show reservation box
window.showReservations = async (id) => {
  const poster = document.querySelector(`#poster-${id}`).src;
  const title = document.querySelector(`#title-${id}`).innerText;
  const reservation = await api.allReservation(id);
  const AllReservation = reservation.map((reservation) => `<div class="comment">
    <div class="date">${reservation.date_start}</div>
    <div class="user-name">${reservation.date_end}</div>
    <div class="comment-text">${reservation.username}</div>
</div>`).join('');

  const reservationBox = getReserveBox(poster, title, id);
  document.querySelector('#reservation-section').innerHTML = reservationBox;
  document.getElementById('comment-box').classList.remove('none');
  document.getElementById('comment-box').classList.add('block');
  if (AllReservation) {
    document.querySelector('.recent-comment__history').insertAdjacentHTML('beforeend', AllReservation);
  }
  document.querySelector('.total-reservations').innerHTML = `(${reservation.length})`;
};

// Add new reservation
window.addNewReservation = async (id) => {
  const name = document.querySelector('#name').value;
  const start = document.querySelector('#start-date').value;
  const end = document.querySelector('#end-date').value;
  if (name === '' || start === '' || end === '') {
    return;
  }
  document.querySelector('#name').value = '';
  document.querySelector('#start-date').value = '';
  document.querySelector('#end-date').value = '';
  await api.reservation(id, name, start, end);
};
