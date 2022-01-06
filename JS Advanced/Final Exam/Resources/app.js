window.addEventListener('load', solve);

function solve() {
    const [genre, nameOfSong, author, date] = document.querySelectorAll('.container-text input');
    const addBtn = document.getElementById('add-btn');
    const collectionOfSongs = document.querySelector('#all-hits div');
    const savedList = document.querySelector('#saved-hits div');

    addBtn.addEventListener('click', addSong);

    function addSong(e) {
        e.preventDefault();
        if (genre.value !== '' || nameOfSong.value !== '' || author.value !== '' || date.value !== '') {

            const divElement = document.createElement('div');
            divElement.classList.add('hits-info');
            divElement.innerHTML += `<img src="./static/img/img.png">
                                     <h2>Genre: ${genre.value}</h2>
                                     <h2>Name: ${nameOfSong.value}</h2>
                                     <h2>Author: ${author.value}</h2>
                                     <h3>Date: ${date.value}</h3>
                                     <button class="save-btn">Save song</button>
                                     <button class="like-btn">Like song</button>
                                     <button class="delete-btn">Delete</button>`
            collectionOfSongs.appendChild(divElement);
            const genreCopy = genre.value;
            const nameCopy = nameOfSong.value;
            const authorCopy = author.value;
            const dateCopy = date.value;
            divElement.querySelectorAll('.hits-info button')[0].addEventListener('click', () => saveSongs(genreCopy, nameCopy, authorCopy, dateCopy));
            divElement.querySelectorAll('.hits-info button')[1].addEventListener('click', addLikes);
            divElement.querySelectorAll('.hits-info button')[2].addEventListener('click', deleteSong);
            genre.value = '';
            nameOfSong.value = '';
            author.value = '';
            date.value = '';
        }
        function saveSongs(genreCopy, nameCopy, authorCopy, dateCopy) {
            const divElement = createE('div', { 'class': 'hits-info' },
                createE('img', { 'src' : "./static/img/img.png" }),
                createE('h2',{}, `Genre: ${genreCopy}`),
                createE('h2',{}, `Name: ${nameCopy}`),
                createE('h2',{}, `Author: ${authorCopy}`),
                createE('h3',{}, `Date: ${dateCopy}`),
                createE('button', {'class' :'delete-btn'}, 'delete')
            )

            savedList.appendChild(divElement);
            const children = document.querySelector('.all-hits-container div');
            children.remove();
            divElement.querySelector('.saved-container div button').addEventListener('click', deleteSavedSongs);
        }
        function addLikes(e) {
            e.target.disabled = true;
            let totalLike = document.querySelector('#total-likes p');
            let likes = Number(totalLike.textContent.split(' ').pop());
            likes += 1;
            totalLike.textContent = 'Total Likes: ' + likes;
        }
        function deleteSong(e) {
            const deleteElement = e.target.parentElement
            deleteElement.remove();

        }
        function deleteSavedSongs(e) {
            const childrenElement = e.target.parentElement;
            childrenElement.remove()

        }
    }
    function createE(type, attr, ...content) {
        const element = document.createElement(type)

        for (let prop in attr) {
            element[prop] = attr[prop];
        }
        for (let item of content) {
            if (typeof item === 'string' || typeof item === 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }
        return element;
    }
}