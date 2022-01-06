function getArticleGenerator(articles) {
    const arr = articles;
    const divElement = document.getElementById('content');
    return () => {
        if(arr.length != 0){
            const article = document.createElement('article');
            article.textContent = arr.shift();
            divElement.appendChild(article);
        }
    }
  
}
