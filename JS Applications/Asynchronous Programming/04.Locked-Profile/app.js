async function lockedProfile() {

    const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
    const data = await response.json();
    Object.values(data).forEach(p => {
       document.querySelector('main').appendChild(createProfile(p));
    })
    document.querySelectorAll('.profile')[0].remove();
        
}

function createProfile(person) {
    const div = document.querySelector('.profile');
    const newEl = div.cloneNode(true);
    newEl.querySelectorAll('input')[2].value = person.username;
    newEl.querySelectorAll('input')[3].value = person.email;
    newEl.querySelectorAll('input')[4].value = person.age;
    newEl.querySelector('button').addEventListener('click', () => toggleInfo(newEl));
    return newEl;
}

function toggleInfo(element) {
    const hiddenEls = element.querySelector('#user1HiddenFields');
    const button = element.querySelector('button');
    if (element.querySelectorAll('input')[1].checked == true && button.textContent == 'Show more') {
        hiddenEls.style.display = 'block';
        button.textContent = 'Hide it';
    } else if (element.querySelectorAll('input')[1].checked == true && button.textContent == 'Hide it'){
        hiddenEls.style.display = 'none';
        button.textContent = 'Show more';
    }
}