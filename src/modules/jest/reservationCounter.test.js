const reservationCounter = require('./reservationCounter.js');
const getData = require('./reservationCounter.js');

describe('Show total reservations:', () => {
  test('Total reservations: ', () => {
    expect(reservationCounter).toBe(getData);
  });
});