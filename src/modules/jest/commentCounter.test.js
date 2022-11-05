const commentCounter = require('./commentCounter.js');
const getData = require('./commentCounter.js');

describe('Show total comments:', () => {
  test('Total comments: ', () => {
    expect(commentCounter).toBe(getData);
  });
});