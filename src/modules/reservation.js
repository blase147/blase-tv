const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0A9vcPjBksSY31pS7L1S/reservations/';

function reservationCounter(data, link) {
  link.innerHTML = `Reservations (${data.length})`;
  return data.length;
}

const getReservations = async (id) => {
  const showReservation = document.querySelector('.reservations');
  showReservation.innerHTML = 'Reservations (0)';
  await fetch(`${url}?item_id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      reservationCounter(data, showReservation);
      const reservationList = document.querySelector('.reservationList');
      reservationList.innerHTML = '';
      data.map((reservation) => {
        const addReservation = document.createElement('li');
        addReservation.classList.add('reservation-elements');
        if (reservation.start_date === '' || reservation.end_date === '' || reservation.username === '') {
          return;
        }
        addReservation.innerHTML = `
          <span>${reservation.start_date}</span> -
          <span>${reservation.end_date}</span> by ${reservation.username}
        `;
        reservationList.appendChild(addReservation);
      }).join('');
    });
};

const postReservation = async (username, startDate, endDate, id) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      startDate,
      endDate,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => {
    getReservations(id);
  });
};

export { postReservation, getReservations };