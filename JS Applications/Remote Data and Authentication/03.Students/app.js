window.onload = loadStudents;
document.getElementById('submit').addEventListener('click', addStudent);

async function addStudent(event) {
    event.preventDefault();
    const [firstName, lastName, facultyNumber, grade] = document.querySelectorAll('input');
    console.log(firstName, lastName, facultyNumber, grade);
    if (firstName.value == '' || lastName.value == '' || facultyNumber.valeu == '' || grade.value == '') {
        return alert('All fields must be filled !');
    }

    if (isNaN(Number(grade.value)) == true || Number.isInteger(Number(facultyNumber.value)) == false) {
        return alert('Faculty number and grade must be numbers !')
    }

    await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName: firstName.value,
            lastName: lastName.value,
            facultyNumber: facultyNumber.value,
            grade: Number(grade.value)
        })
    });
    firstName.valuen = '';
    lastName.value = '';
    facultyNumber.value = '';
    grade.value = '';
    loadStudents();

}

async function loadStudents() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    const response = await fetch('http://localhost:3030/jsonstore/collections/students');
    const data = await response.json();

    Object.values(data).map(createRow).forEach(r => tbody.appendChild(r));

    function createRow(student) {
        const row = document.createElement('tr');

        const firstName = document.createElement('td');
        firstName.textContent = student.firstName;

        const lastName = document.createElement('td');
        lastName.textContent = student.lastName;

        const facultyNumber = document.createElement('td');
        facultyNumber.textContent = student.facultyNumber;

        const grade = document.createElement('td');
        grade.textContent = student.grade;

        row.appendChild(firstName);
        row.appendChild(lastName);
        row.appendChild(facultyNumber);
        row.appendChild(grade);

        return row;
    }
}