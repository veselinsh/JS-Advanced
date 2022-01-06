let userData = null;
window.addEventListener('DOMContentLoaded', () => {
    userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData !== null) {
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#addForm .add').disabled = false;
    } else {
        document.getElementById('user').style.display = 'none';
    }
    document.querySelector('.load').addEventListener('click', loadData);
    document.getElementById('addForm').addEventListener('submit', onCreateSubmit);
    document.getElementById('logout').addEventListener('click', logout);
    document.getElementById('catches').addEventListener('click',invokeHandler)
})

async function onCreateSubmit(event) {
    event.preventDefault();
    if (!userData) {
        window.location = './login.html'
        return;
    }
    const formData = new FormData(event.target);
    const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});
    try {
        if (Object.values(data).some(x => x == '')) {
            throw new Error('All fields are required');
        }
        const res = await fetch('http://localhost:3030/data/catches', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token,
            },
            body: JSON.stringify(data)
        });
        if (res.ok !== true) {
            const error = await res.json();
            throw new Error(error.message);
        }
        document.querySelector('.email span').textContent = `${userData.email}`
        loadData();
        event.target.reset();
    } catch (err) {
        alert(err.message);
    }
}


async function loadData() {
    const res = await fetch('http://localhost:3030/data/catches');
    const data = await res.json();
    document.getElementById('catches').replaceChildren(...data.map(createPreview))

}
function createPreview(item) {
    const isOwner = (userData && item._ownerId == userData.id)
    const element = document.createElement('div');
    element.className = 'catch';
    element.innerHTML = `<label>Angler</label>
        <input type="text" class="angler" value="${item.angler}" ${!isOwner ? 'disabled' : ''}>
        <label>Weight</label>
        <input type="text" class="weight" value="${item.weight}" ${!isOwner ? 'disabled' : ''}>
        <label>Species</label>
        <input type="text" class="species" value="${item.species}" ${!isOwner ? 'disabled' : ''}>
        <label>Location</label>
        <input type="text" class="location" value="${item.location}" ${!isOwner ? 'disabled' : ''}>
        <label>Bait</label>
        <input type="text" class="bait" value="${item.bait}" ${!isOwner ? 'disabled' : ''}>
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="${item.captureTime}" ${!isOwner ? 'disabled' : ''}>
        <button class="update" data-id="${item._id}" ${!isOwner ? 'disabled' : ''}>Update</button>
        <button class="delete" data-id="${item._id}" ${!isOwner ? 'disabled' : ''}>Delete</button>`
    return element;

}
function logout() {
    fetch('http://localhost:3030/users/login', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('token')
        }
    })

    sessionStorage.clear()
    window.location = './index.html';
}
function invokeHandler(event) {
    if (event.target.textContent == 'Update') {
        updateCatch(event);
    } else if (event.target.textContent == 'Delete') {
        deleteCatch(event);
    }
}
async function updateCatch  (event){
    const [angler, weight, species, location, bait, captureTime] = event.target.parentElement.querySelectorAll('input');
    const id = event.target.dataset.id;
    const res = await fetch('http://localhost:3030/data/catches/' + id,{
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token
        },
        body: JSON.stringify({ angler: angler.value, weight: weight.value, species: species.value
            , location: location.value, bait: bait.value, captureTime: captureTime.value})
    });
    if(res.ok !== true){
        const error = await res.json();
        alert(error.message);
    }
 }
 async function deleteCatch(event){
    const id = event.target.dataset.id;
    const res = await fetch('http://localhost:3030/data/catches/' + id,{
        method: 'delete',
        headers: {
            'X-Authorization': userData.token
        }
    });
    event.target.parentElement.remove();
 }