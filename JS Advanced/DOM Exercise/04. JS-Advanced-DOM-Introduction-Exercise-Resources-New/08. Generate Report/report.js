function generateReport() {
    const checkButton = Array.from(document.querySelectorAll('thead th input'));
    const resultButton = document.getElementById('output');
 
    let indexes = [];
 
    checkButton.forEach((b, index) => {
 
        if (b.checked == true) {
            indexes.push(index);
        }
    });
 
    const rows = document.querySelectorAll('tbody tr');
 
    const title = document.querySelectorAll('thead th');
 
    let rezult = [];
    for (let row of rows) {
 
        let obj = {};
        for (let index of indexes) {
 
            let currRow = row.children[index].textContent;
            let currTh = title[index].textContent.toLowerCase().trim();
            obj[currTh] = currRow;
 
        }
        rezult.push(obj);
    }
 
    resultButton.value = JSON.stringify(rezult, null, 2);
}
