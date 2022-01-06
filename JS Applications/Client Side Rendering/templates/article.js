import { html } from 'https://unpkg.com/lit-html?module';
import commentTemplate from './comments.js'
 
const articleTemplate = (onSubmit, data) => html`<article>
    <h3>${data.title}</h3>
    <div>
        <p>
            ${data.description}
        </p>
        <footer>Author: ${data.author}</footer>
        <form @submit=${onSubmit}>
            <textarea name="comment"></textarea>
            <button>Submit Comment</button>
        </form>
    </div>
    <ul>
        ${data.comments.map(commentTemplate)}
    </ul>
</article>`


export default articleTemplate;