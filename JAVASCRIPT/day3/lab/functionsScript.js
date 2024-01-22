function convertFirstLetter(fullName)
{
    answer='';
   fullName = fullName.toLowerCase();
   answer+=String.fromCharCode(fullName[0].charCodeAt(0) - 32);
   for(let i=1;i<fullName.length;i++)
   {
     if(fullName[i]==' ')
     {
        answer+=fullName[i];
        i++;
        answer+=String.fromCharCode(fullName[i].charCodeAt(0) - 32);
     }
     else{
        answer+=fullName[i];
     }
   }
  return answer;
}

function longestWord(sentence)
{
    sentence=sentence.split(' ');
    result = "";
    maxLength=0;
    sentence.forEach(element => {
        
        if(element.length>maxLength)
        {
            result = element;
            maxLength=element.length;
        }
    });
    return result;
}
function sortString(word)
{
    word=word.split('').sort().join('');
    return word;
}

function getMonthName(date)
{
    monthNames = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ];
    
    dateObject=new Date(date);
    return monthNames[dateObject.getMonth()];
}

function randomArry()
{
    let randomNumbers=[];
    while(randomNumbers.length<5)
    {
        number=Math.floor(Math.random()*10);
        if(!randomNumbers.includes(number))
        {
            randomNumbers.push(number);
        }
    }
    return randomNumbers;
}
