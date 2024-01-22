
let studentName=document.getElementById('studentName');
let table=document.getElementById('studenTable');
studentName.addEventListener('input',function(){
   
    let existingNames=Array.from(table.querySelectorAll('tr td:first-child')).map(td => td.textContent);
    let warningMessage=document.getElementById('warning')
    warningMessage.style.color='red';
    if(existingNames.includes(studentName.value))
        warningMessage.textContent='this name already exists';
    else
      warningMessage.textContent='';

});

let studentGrade=document.getElementById('studentGrade');
studentGrade.addEventListener('input',function(){
    let warningMessage=document.getElementById('grade');
    warningMessage.style.color='red';
    if(studentGrade.value>100||studentGrade.value<0)
        warningMessage.textContent='grade should be between 0 and 100';
    else
      warningMessage.textContent='';
});

let addButton=document.getElementById('addButton');
addButton.onclick=addNewRow;

let filterElements = document.getElementById('filter');
filterElements.addEventListener('click',function(){
    let filter = filterElements.value;
    let students=Array.from(table.querySelectorAll('tr'));
    for(let i=1;i<students.length;i++){
        let grade = students[i].querySelector('td:nth-child(2)').textContent;
        if (filter == 'all')
          students[i].style.display = ''; 
        else if(filter === 'success' && grade >= 60) 
          students[i].style.display = '';
        else if(filter === 'fail' && grade < 60)
          students[i].style.display = ''; 
        else
          students[i].style.display = 'none';
    };
});


// let sortElements=document.getElementById('sort');
// sortElements.addEventListener('click',function(){
//     let sort=sortElements.value;
//     let students=Array.from(table.querySelectorAll('tr'));
//     for(let i=1;i<students.length;i++)
//     {
//         let name=students[i].querySelector('td:first-child').textContent;
//         if(sort=='name')
//         {
//            students.sort((a, b)=>
//            a.querySelector(('td:first-child').textContent).
//            );
//         }
//         else if(sort=='grade')
//         {
//             students.sort((a, b) =>b-a);
//         }
//     }
// });



