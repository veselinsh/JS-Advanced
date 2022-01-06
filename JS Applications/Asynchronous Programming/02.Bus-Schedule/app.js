function solve() {
    const label = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let stop = {
        next: 'depot'
    }
    async function depart() {
        try {
            label.textContent = 'Loading...';
            const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
            const res = await fetch(url);
            if(res.status !== 200){
                throw new Error('Error');
            }
            const data = await res.json();
            stop = data;
            label.textContent = `Next stop ${data.name}`;
        }catch(error){
           label.textContent = 'Error'
        }   
        arriveBtn.disabled = false;
        departBtn.disabled = true;

    }

    function arrive() {
        label.textContent = `Arriving at ${stop.name}`;
        arriveBtn.disabled = true;
        departBtn.disabled = false;

    }

    return {
        depart,
        arrive
    };
}

let result = solve();