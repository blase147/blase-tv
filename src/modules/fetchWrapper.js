const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const involveKey = '9Il7nZFFQBX3bIEy06IW';

const getInvolveKey = async (url) => {
  const data = await fetch(baseUrl+url,{
    method: 'POST',
    headers: {
      'Content-type': 'text/JSON; charset=utf-8',
    },
  });
  console.dir(await data.text());
  return await data.text();
}

const api = { getInvolveKey }
export default api;