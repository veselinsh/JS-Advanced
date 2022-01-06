import { createComment, deleteGame, getAllGames, getComments, getGameById } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (game, isOwner, onDelete, comments,addComment,isLoged) => html`  
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="${game.imageUrl}" />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>
        <div class="buttons">
            ${isOwner ? html` <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>` : null}
        </div>

        <div class="details-comments">
            <h2>Comments:</h2>
            <ul>
                ${comments.length == 0 ? html`<p class="no-comment">No comments.</p>` : comments.map(commentTemplate)}
            </ul>
        </div>
        ${isLoged == true ? null :
        html`
        <article class="create-comment">
            <label>Add new comment:</label>
            <form @submit=${addComment} class="form">
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input class="btn submit" type="submit" value="Add Comment">
            </form>
        </article>`}

    </div>
</section>`;


const commentTemplate = (comment) => html`
<li class="comment">
    <p>Content: ${comment}</p>
</li>`
export async function detailsPage(ctx) {
    const userData = getUserData();
    const game = await getGameById(ctx.params.id);
    const comments = await getComments(game._id);

    const isOwner = userData && userData.id == game._ownerId;
    const isLoged = userData && userData.id == game._ownerId || !userData;
    ctx.render(detailsTemplate(game, isOwner, onDelete, comments,addComment,isLoged));
    async function onDelete() {
        const choice = confirm(`Are you sure you want to delete ${game.title}?`)
        if (choice) {
            await deleteGame(ctx.params.id);
            ctx.page.redirect('/');
        }
    }
    async function addComment(event){
        event.preventDefault();
        const gameId = game._id
        const formData = new FormData(event.target);
        const comment = formData.get('comment');
        await createComment({gameId,comment});
        ctx.page.redirect('/details/'+ gameId);
    }


}