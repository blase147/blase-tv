const getCommentBox = (poster, title, id) => `
<div id="comment-box" class="none">
    <div class="comment-box">
        <i class="fa fa-times comment__cross" onclick="closeComment()"></i>
        <div class="comment__header">
            <img src="${poster}" class="comment__poster"></img>
            <p class="comment__movie-tile">${title}</p>
        </div>
        <div class="recent-comment">
            <div class="recent-comment__heading">Recent Comments - <span class="total-comments"></span></div>
            <div class="recent-comment__history"></div>
           </div>
        </div>
        <div class="add-comment">
            <div class="add-comment__heading">Add a comment</div>
            <div class="add-comment__box">
                <input id="name" type="text" placeholder="Full Name" required>
                <textarea id="comment-holder" placeholder="Write a new comment..." required></textarea>
                <button type="submit" class="btn-add-comment" onclick="addNewComment(${id})">Comment</button>
            </div>
        </div>
    </div>
</div>`;
export default getCommentBox;