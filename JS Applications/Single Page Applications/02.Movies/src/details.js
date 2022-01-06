import {e, showView} from './dom.js'
import { editMovie } from './edit.js';
import { showHome } from './home.js';
const detailsSection = document.getElementById('movie-details');
detailsSection.remove();

export  function showDetails(movieId){
   
    showView(detailsSection);
    getMovie(movieId);
}
async function getMovie(id){
    detailsSection.replaceChildren(e('p',{},'Loading...'));
   const request = [
        fetch('http://localhost:3030/data/movies/'+id),
        fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`)]
        const userData = JSON.parse(sessionStorage.getItem('userData'));
        if(userData !== null){
       
        request.push(fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userData.id}%22`))
        }
    
    const [movieRes,likesRes,hasLikesRes] = await Promise.all(request);
    const [movieData,likesData,hasLiked] = await Promise.all([movieRes.json(),likesRes.json(),hasLikesRes && hasLikesRes.json()]);
    detailsSection.replaceChildren(createDetails(movieData,likesData,hasLiked));
}

function createDetails(movie,likes,hasLiked){
   
    const controls = e('div',{className:'col-md-4 text-center'},
        e('h3',{className:'my-3'},'Movie Description'),
        e('p',{},movie.description)
    )
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if(userData !== null){
        if(userData.id == movie._ownerId){
            controls.appendChild(e('a',{className:'btn btn-danger',href:'#',onClick: onDelete},'Delete'));
            controls.appendChild(e('a',{className:'btn btn-warning',href:'#',onClick: onEdit},'Edit'));
        }else{
            if(hasLiked.length > 0){
                controls.appendChild(e('a',{className:'btn btn-primary',href:'#',onClick: onUnlike },'Unlike'))
            }else{
                controls.appendChild(e('a',{className:'btn btn-primary',href:'#',onClick: onLike },'Like'))
            }

        }
    }
    controls.appendChild(e('span',{className:'enrolled-span'},`Liked: ${likes}`))

    const element = e('div',{className:'container'},
    e('div',{className:'row bg-light text-dark'},
       e('h1',{},`Movie title: ${movie.title}`),
       e('div',{className:'col-md-8'},
          e('img',{className:'img-thumbnail',src: movie.img ,alt:'Movie'})
       ),
       controls
     )
    )
    return element;
    async function onLike(){
        await fetch('http://localhost:3030/data/likes',{
            method:'post',
            headers:{
                'Content-Type':'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify({
                movieId : movie._id
            })
        });
        showDetails(movie._id);
    }
    async function onUnlike(){
        const likeId = hasLiked[0]._id;
        await fetch('http://localhost:3030/data/likes/'+likeId,{
            method:'delete',
            headers:{
                'X-Authorization': userData.token
            }
        });
        showDetails(movie._id);
    }

    async function onDelete(){
        await fetch('http://localhost:3030/data/movies/'+movie._id,{
            method:'delete',
            headers:{
                'X-Authorization': userData.token
            }
        });
        showHome();
    }
    function onEdit(){
      const title = element.querySelector('.row bg-light text-dark h1').textContent;
      const img = element.querySelector('.conatiner img').textContent;
      const description = element.querySelector('.col-md-4 text-center p').textContent;
      onEdit(title,img,description);
    }
}
