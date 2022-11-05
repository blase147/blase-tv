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
  const AllLikes = await allLikes.json();
  return AllLikes;
};

// Add new like
const like = async (id) => {
  // Parameters
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

const api = {
  getInvolveKey,
  like,
  allLikes,
};
export default api;