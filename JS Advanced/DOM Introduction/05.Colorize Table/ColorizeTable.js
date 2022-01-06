function colorize() {
    const items = document.querySelectorAll("table tr:nth-child(even)");    
    for(let i = 0;i<items.length;i++){
        items[i].style.backgroundColor = 'teal';
    }
}