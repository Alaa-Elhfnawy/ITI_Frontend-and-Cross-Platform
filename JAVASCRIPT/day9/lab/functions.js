
class Person
{
    static #counter=0;
     #fullName;
     #personDiv;
    constructor(gender,profilePicture)
    {
       
         // Prevent creating an object from this class
         if (new.target === Person) {
            throw new Error("Cannot instantiate Person directly");
        }

        this.gender=gender;
        this.profilePicture=profilePicture;
        Person.#counter++;

    
        this.#personDiv = document.createElement('div');
        this.#personDiv.style.border = '3px solid black';
        this.#personDiv.style.height='280px';
        this.#personDiv.style.width='200px'
        this.#personDiv.style.padding='20px';
        this.#personDiv.style.margin='20px';
        
        //display Image in html page
        let displyImage=document.createElement('img');
        if(profilePicture==''&&gender=='male')
        {
            profilePicture='male.png';
        }
        else if(profilePicture==''&&gender=='female')
        {
            profilePicture='female.png';
        }
        displyImage.src=profilePicture;
        displyImage.style.height='150px';
        displyImage.style.width='150px';
        displyImage.style.borderRadius='50%';
        this.addToDiv(displyImage);

        //display gender
        let displayGender=document.createElement('p');
        displayGender.textContent=gender;
        this.addToDiv(displayGender);
        document.body.appendChild(this.#personDiv);

    }
    addToDiv(element)
    {
        this.#personDiv.appendChild(element);
    }

    // displayDiv()
    // {
       
    //     return this.#personDiv;
    // }
    static get counter()
    {
       return Person.#counter;
    }

    set fullName(value)
    {
           this.#fullName=value;
           this.#fullName=this.#fullName.toLowerCase();
           let answer='';
           answer+=String.fromCharCode(this.#fullName[0].charCodeAt(0) - 32);
           for(let i=1;i<this.#fullName.length;i++)
         {
                 if(this.#fullName[i]==' ')
                {
                    answer+=this.#fullName[i];
                    i++;
                    answer+=String.fromCharCode(this.#fullName[i].charCodeAt(0) - 32);
                }
                else{
                    answer+=this.#fullName[i];
                }
         }

         this.#fullName=answer;

    }

    get fullName()
    {
         //display the full name in html ?????? 
         let displayName=document.createElement('p');
         displayName.textContent=this.#fullName;
         this.addToDiv(displayName);
    }
}

class Employee extends Person
{
    
    constructor(gender,profilePicture,salary,language)
    {
        super(gender,profilePicture);
        this.salary=salary;
        this.language=language;

        //display lang
        let displayLanguage=document.createElement('p');
        displayLanguage.textContent=language;
        this.addToDiv(displayLanguage);
       
        //display salary
        let displaySalary=document.createElement('p');
        displaySalary.textContent=salary;
        this.addToDiv(displaySalary);
    }


    toString() {
      return "Name = "+this.fullName+" , Salary = "+this.salary;
    }
}

//----------------------------------------------------ass2------------------------------

const validateStudentName=function(name)
{


//     studentName.addEventListener('input',function(){
//     let table=document.getElementById('studenTable');
//     let existingNames=Array.from(table.querySelectorAll('tr td:first-child')).map(td => td.textContent);
//     if(existingNames.includes(name))
//     {
//         alert('Student name must be unique.');
//             return false;
//     }
//     return true;
// });
}

// const validateStudentGrade=function()
// {
//     let studentGrade=document.getElementById('studentGrade').value;
//     if(isNaN(studentGrade)&&!(studentGrade>=0&&studentGrade<=100))
//     {
//         return ;
//     }
// }

const addNewRow=function()
{
    let studentName=document.getElementById('studentName').value;
    let studentGrade=document.getElementById('studentGrade').value;
    let table=document.getElementById('studenTable');
    let newRow=document.createElement('tr');
    validateStudentName(studentName);
    document.getElementById('studentName').value='';
    document.getElementById('studentGrade').value='';

    newRow.insertCell().textContent=studentName;
    newRow.insertCell().textContent=studentGrade;
    newRow.insertCell().textContent='🗑';

    if(studentGrade<50)
        newRow.style.backgroundColor='red';
    else if(studentGrade>50)
        newRow.style.backgroundColor='green';
    else
        newRow.style.backgroundColor='white';

    table.appendChild(newRow);
}

// const success=function()
// {
//     let table=document.getElementById('studenTable');
//     let rows = table.getElementsByTagName('tr');
//     // for (let i = 1; i < rows.length; i++) {
//     //     let studentGrade = rows[i].getElementsByTagName('td')[1].textContent;
//     //     if(studentGrade>=60)
//     //     {
//     //         rows[i].style.display='';
//     //     }
//     // }
//     let filter = document.getElementById('filter').value;
//     for (let i = 1; i < rows.length; i++) {
//         let studentGrade = parseInt(rows[i].getElementsByTagName('td')[1].textContent, 10);

//         if (filter === 'all' || (filter === 'success' && studentGrade >= 60) || (filter === 'fail' && studentGrade < 60)) {
//             rows[i].style.display = '';
//         } else {
//             rows[i].style.display = 'none';
//         }
//     }

// }

