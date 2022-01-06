function solve() {
    const [lectureName,date] = Array.from(document.querySelectorAll('div input'));
    let  select = document.getElementById('language');
    let value = select.options[select.selectedIndex].value;
    console.log(value); 
    
    console.log(lectureName,date);
};