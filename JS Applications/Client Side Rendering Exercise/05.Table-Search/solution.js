import { html,render } from "./node_modules/lit-html/lit-html.js";
const root = document.querySelector('tbody');
const studentRow = (student) => html`<tr class="${student.match ? "select" : ""}">
<td>${student.item.firstName} ${student.item.lastName}</td>
<td>${student.item.email}</td>
<td>${student.item.course}</td>
</tr>`
let students;
document.getElementById('searchBtn').addEventListener('click',onSearch)
async function start(){
   const res = await fetch('http://localhost:3030/jsonstore/advanced/table');
   const data = await res.json();
   students = Object.values(data).map(s=>({item:s,match:false}));
   update();

}
function update(){
   render(students.map(studentRow),root)
}
function onSearch(){
   const match = document.getElementById('searchField').value.trim().toLocaleLowerCase();
   for(let student of students){
     student.match = match && Object.values(student.item).some(i=>i.toLocaleLowerCase().includes(match))
   }
   update();
}
start();