const getMovieCard = (poster, title) => `<div class="card">
                <img class="poster" src="${poster}" alt="Poster">
                <div class="card__header">
                    <p class="card__heading">${title}</p>
                    <i class="fa-solid fa-heart heart heart-uncheck" ></i>
                    <p class="card__total-likes">2 Likes</p>
                </div>
                <div class="card__footer">
                    <div class="card__comment card-btn">Comments</div>
                    <div class="card__reservation card-btn">Reservations</div>
                </div>
            </div>
            

            <!-- The Modal -->
            <div id="myModal" class="modal">
                <!-- Modal content -->
                <div class="modal-content">
                  <span class="close-comment-popup">&times;</span>
                
                  <div class="comment-modal-image">
        
                  </div>
        
                  <div class="info">
                    <h2 class="info-title">Space 3</h2>
                    <div class="info-items">
                      <p class="info-item">fuel :titanuim</p>
                      <p class="info-item">length :100,000</p>
                      <p class="info-item">weight :400</p>
                      <p class="info-item">power :100,000,000</p>
                    </div>
                  </div>
                  <div class="comments-section">
                    <h2 class="info-title comment-header">Comments (2)</h2>
                    <div class="comments">
                      <div class="comment">
                        <p class="">11/02/2022 <span class="comment-author">Alex</span> :I'd love to buy it!</p>
                      </div>
                      <div class="comment">
                        <p class="">11/02/2022 <span class="comment-author">Mia</span> :I love</p>
                      </div>
                    </div>
                  </div>
                  <div class="comments-section-add">
                    <h2 class="info-title add-comment">Add a comment</h2>
                    <input type="text" name="input" placeholder="Your name" class="input">
                    <textarea name="name" placeholder="Your Insights"  rows="8" cols="80" class="text-input"></textarea>
                    <button type="button" name="button" class="btn">Comment</button>
                  </div>
                </div>
            </div>

            <div class="reservationPopupContainer hidden">
            <div class="movieImageContainer">
              <img src="" alt="Space Reservation">
              <button type="button" class="closeBtn"><i class="fa-solid fa-circle-xmark"></i></button>
            </div>
            <h1 class="movieTitle">Space 3</h1>
            <div class="reservationDescription">
              <div>
                <p>Fuel: titanium</p>
                <p>length: 100,000</p>
              </div>
              <div>
                <p>Weight: 400</p>
                <p>Power: 100,000</p>
              </div>
            </div>
            <div class="reservationListContainer">
              <h2>Reservation (2)</h2>
              <p>03/11/2021-03/12/2021 by Alex</p>
              <p>03/14/2021-03/16/2021 by Mia</p>
            </div>
        
            <div class="reservationFormContainer">
              <h2>Add a reservation</h2>
              <form class="reservationForm" action="">
                <input id="yourname" type="text" name="name" placeholder="Your name">
                <input id="startDate" type="test" name="startDate" placeholder="Start Date">
                <input id="endDate" type="text" name="endDate" placeholder="End Date">
                <input id="reservationBtn" type="submit" value="Reserve">
              </form>
            </div>
          </div>
            `;

export default getMovieCard;