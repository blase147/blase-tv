const movieCounter = require('./movieCounter.js');
const getShows = require('./movieCounter.js');

describe('Show total movies:', () => {
  test('Total movies: ', () => {
    expect(movieCounter).toBe(getShows);
  });
});