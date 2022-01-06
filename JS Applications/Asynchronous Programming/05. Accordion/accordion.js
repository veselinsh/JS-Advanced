window.addEventListener('load', solution);
async function solution() {
    const url ='http://localhost:3030/jsonstore/advanced/articles/list'
    const response = await fetch(url);
    const data = await response.json();

    data.forEach(d => {
        const newEl = document.createElement('div');
        newEl.className = 'accordion';
        newEl.innerHTML = `<div class="head">
        <span>${d.title}</span>
        <button class="button" id="ee9823ab-c3e8-4a14-b998-8c22ec246bd3">More</button>
    </div>
    <div class="extra">
        <p>Scalable Vector Graphics .....</p>
    </div>`
        document.querySelector('#main').appendChild(newEl);
        newEl.querySelector('button').addEventListener('click', () => toggle(d._id, newEl));
    })


}

async function toggle(id, element) {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/details/' + id
    const response = await fetch(url);
    const info = await response.json();
    const extra = element.querySelector('.extra');
    element.querySelector('p').textContent = info.content;
    const button = element.querySelector('button');

    if (button.textContent == 'More') {
        extra.style.display = 'block';
        button.textContent = 'Less';
    } else {
        extra.style.display = 'none';
        button.textContent = 'More';
    }
}