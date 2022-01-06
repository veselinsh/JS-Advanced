import {showView} from './dom.js'
const editSection = document.getElementById('edit-movie');
const form = document.querySelector('form');
editSection.remove();

export  function showEdit(){
    showView(editSection)
}

export function editMovie(title,img,description){
   const formData = new FormData(form)
}
/*
 <form class="text-center border border-light p-5" action="#" method="">
                <h1>Edit Movie</h1>
                <div class="form-group">
                    <label for="title">Movie Title</label>
                    <input type="text" class="form-control" placeholder="Movie Title" value="" name="title">
                </div>
                <div class="form-group">
                    <label for="description">Movie Description</label>
                    <textarea class="form-control" placeholder="Movie Description..." name="description"></textarea>
                </div>
                <div class="form-group">
                    <label for="imageUrl">Image url</label>
                    <input type="text" class="form-control" placeholder="Image Url" value="" name="imageUrl">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
*/