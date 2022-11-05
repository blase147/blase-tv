const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const involveKey = '9Il7nZFFQBX3bIEy06IW';

// Generate Unique ID
const getInvolveKey = async (url) => {
  const data = await fetch(baseUrl + url, {
    method: 'POST',
    headers: {
      'Content-type': 'text/JSON; charset=utf-8',
    },
  });
  const Data = await data.text();
  return Data;
};

// Fetch Existing likes from API
const allLikes = async () => {
  // Fetch total likes from API
  const allLikes = await fetch(`${baseUrl + involveKey}/likes/`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (allLikes.status !== 200) {
    return [];
  }
  const Data = await allLikes.json();
  return Data;
};

// Add new like
const like = async (id) => {
  const object = {
    item_id: id,
  };
  // Update Likes
  await fetch(`${baseUrl + involveKey}/likes/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(object),
  });
  // Update Likes UI
  const likes = await allLikes();
  const likesOfMovie = likes.find((item) => item.item_id === id)?.likes ?? 0;
  const movie = document.getElementById(`likes-${id}`);
  movie.innerText = likesOfMovie;
};

// Fetch Existing comments from API
const allComments = async (id) => {
  // Fetch all comments from API
  const data = await fetch(`${baseUrl + involveKey}/comments?item_id=${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (data.status !== 200) {
    return [];
  }
  const Data = await data.json();
  return Data;
};

// Add new comment
const comment = async (id, name, newComment) => {
  const object = {
    item_id: id,
    username: name,
    comment: newComment,
  };
  // Update comments
  const Data = await fetch(`${baseUrl + involveKey}/comments/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(object),
  });
  const comment = await allComments(id);
  document.querySelector('.total-comments').innerHTML = `(${comment.length})`;
  document.querySelector('.recent-comment__history').innerHTML = comment.map((reservation) => `<div class="comment">
    <div class="date">${reservation.creation_date}</div>
    <div class="user-name">${reservation.username}</div>
    <div class="comment-text">${reservation.comment}</div>
</div>`)
    .join('');
  if (Data.status !== 200) {
    return [];
  }
  const DATA = await Data.text();
  return DATA;
};

// Fetch Existing reservations from API
const allReservation = async (id) => {
  // Fetch all reservations from API
  const data = await fetch(`${baseUrl + involveKey}/reservations?item_id=${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (data.status !== 200) {
    return [];
  }
  const Data = await data.json();
  return Data;
};

// Add new reservations
const reservation = async (id, name, start, end) => {
  const object = {
    item_id: id,
    username: name,
    date_start: start,
    date_end: end,
  };
  // Update reservations
  const Data = await fetch(`${baseUrl + involveKey}/reservations/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(object),
  });
  const reservations = await allReservation(id);
  document.querySelector('.total-reservations').innerHTML = `(${reservations.length})`;
  document.querySelector('.recent-comment__history').innerHTML = reservations.map((reservation) => `<div class="comment">
    <div class="date">${reservation.date_start}</div>
    <div class="user-name">${reservation.date_end}</div>
    <div class="comment-text">${reservation.username}</div>
</div>`)
    .join('');
  if (Data.status !== 200) {
    return [];
  }
  const DATA = await Data.text();
  return DATA;
  // Update Reservation UI
};

const api = {
  getInvolveKey,
  like,
  allLikes,
  allComments,
  comment,
  allReservation,
  reservation,
};
export default api;