import { render } from 'https://unpkg.com/lit-html?module';

import articleTemplate from './templates/article.js'



async function start() {
    const data = await (await fetch('./data.json')).json();
    const main = document.querySelector('#content');
    const renderBtn = document.getElementById('renderBtn')
    renderBtn.addEventListener('click', onRender)


    function onRender() {
        const result = data.map(a => articleTemplate(onSubmit.bind(null, a), a));
        render(result, main);
    }

    function onSubmit(article, event) {
        const form = main.querySelector('form')
        event.preventDefault();

        const formData = new FormData(event.target);

        const content = formData.get('comment');
        article.comments.push({ content })
        form.reset()
        onRender();
    }
}


start();