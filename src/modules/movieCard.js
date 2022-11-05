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
            
            <!-- Modal Popup-->
            <div id="myModal" class="modal">
                <div class="modal-content">
                  <span class="close-comment-popup">&times;</span>
                
                  <div class="comment-modal-image">
                    <img src="https://res.cloudinary.com/ybmedia/image/upload/c_crop,h_477,w_850,x_0,y_86/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/1/1/11f0b2fa7f2932b9e9e762f22ff45398eee3ea67/20-best-films-pilots.jpg" id="popup-img">
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
            `;

export default getMovieCard;