const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const involveKey = '9Il7nZFFQBX3bIEy06IW';

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

const allLikes = async () => {
  const allLikes = await fetch(`${baseUrl + involveKey}/likes/`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const AllLikes = await allLikes.json();
  console.dir(AllLikes);
  return AllLikes;
};

const like = async (id) => {
  const object = {
    item_id: id,
  };
  await fetch(`${baseUrl + involveKey}/likes/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(object),
  });

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