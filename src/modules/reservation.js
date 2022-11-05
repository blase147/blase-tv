const getReserveBox = (poster, title, id) => `
<div id="comment-box" class="none">
    <div class="comment-box">
        <i class="fa fa-times comment__cross" onclick="closeComment()"></i>
        <div class="comment__header">
            <img src="${poster}" class="comment__poster"></img>
            <p class="comment__movie-tile">${title}</p>
        </div>
        <div class="recent-comment">
            <div class="recent-comment__heading">Recent reservation - <span class="total-reservations"></span></div>
            <div class="recent-comment__history"></div>
           </div>
        </div>
        <div class="add-comment">
            <div class="add-comment__heading">Add a reservation</div>
            <div class="add-comment__box">
                <input id="name" type="text" placeholder="Full Name" required>
                <input id="start-date" type="date" placeholder="Start Date" required>
                <input id="end-date" type="date" placeholder="End Date" required>
                <button type="submit" class="btn-add-comment" onclick="addNewReservation(${id})">Reserve</button>
            </div>
        </div>
    </div>
</div>`;
export default getReserveBox;