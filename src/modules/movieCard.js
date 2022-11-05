const getMovieCard = (poster, title, id, likes) => `<div class="card">
                <img class="poster" id="poster-${id}" src="${poster}" alt="Poster">
                <div class="card__header">
                    <p class="card__heading" id="title-${id}">${title}</p>
                    <i class="fa-solid fa-heart heart" id="heart-${id}" onclick="likeitem(${id})"></i>
                    <p class="card__total-likes" id="likes-${id}">${likes}</p>
                </div>
                <div class="card__footer">
                    <div class="card__comment card-btn" onclick="showComments(${id})">Comments</div>
                    <div class="card__reservation card-btn" onclick="showReservations(${id})">Reservations</div>
                </div>
            </div>`;

export default getMovieCard;