const reservation = [
  { reservation: 'A' },
  { reservation: 'B' },
  { reservation: 'C' },
  { reservation: 'D' },
];

const reservationCounter = () => reservation.length;

const getData = () => reservation.length;

module.exports = reservationCounter();
module.exports = getData();