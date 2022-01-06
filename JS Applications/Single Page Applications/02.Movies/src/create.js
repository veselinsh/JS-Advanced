import { showView } from './dom.js'
import { showHome } from './home.js';
const createSection = document.getElementById('add-movie')
createSection.remove();
const form = createSection.querySelector('form');
form.addEventListener('submit', onCreate);
export function showCreate() {
    showView(createSection)
}

async function onCreate(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const title = formData.get('title');
    const description = formData.get('description');
    const imageUrl = formData.get('imageUrl');
    console.log( title, description, imageUrl );
    const { token } = JSON.parse(sessionStorage.getItem('userData'));

    try {
        const res = await fetch('http://localhost:3030/data/movies', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token,
            },
            body: JSON.stringify({ title, description, imageUrl })
        });
        if (res.ok !== true) {
            const error = await res.json();
            throw new Error(error.message);
        }
        const data = await res.json();
        showHome();

    } catch (err) {
        throw new Error(err.message);
    }

}


{/* <form class="text-center border border-light p-5" action="#" method="">
<h1>Add Movie</h1>
<div class="form-group">
    <label for="title">Movie Title</label>
    <input type="text" class="form-control" placeholder="Title" name="title" value="">
</div>
<div class="form-group">
    <label for="description">Movie Description</label>
    <textarea class="form-control" placeholder="Description" name="description"></textarea>
</div>
<div class="form-group">
    <label for="imageUrl">Image url</label>
    <input type="text" class="form-control" placeholder="Image Url" name="imageUrl" value="">
</div>
<button type="submit" class="btn btn-primary">Submit</button> */}