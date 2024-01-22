const filtergreaterThanValue=function(arry,condition)
{
    result=[];
    for (const item of arry) {
        if(condition(item))
        {
            result.push(item)
        }
    }
    return result;
}
const maxNumber=function(array)
{
    array.sort((a,b)=>a-b);
    return array[array.length-1];
}

const minNumber=function(array)
{
    array.sort((a,b)=>a-b);
    return array[0];
}

const multipliyArrayByValue=function(array,value)
{
    answer=[];
    for (const item of array) {
        answer.push(item*value);
    }
    return answer;
}

const RemoveRepeatedNumbers=function(array)
{
    answer=[];
    for (const item of array) {
        if(!answer.includes(item))
        {
            answer.push(item);
        }
    }
    return answer;
}

const evenNumbers=function(array)
{
    answer=0;
    for (const item of array) {
        if(item%2==0)
        {
            answer++;
        }
    }
    return answer;
}
const evenAsString=function(array)
{
    answer="";
    for (const item of array) {
        if(item%2==0)
        {
            answer+=item;
        }
    }

    return answer;
}

const randomRange=function(first,last,lenth)
{
    answer=[];
    while(answer.length<lenth)
    {
        item=Math.floor((Math.random()*10));
        if(item>=first && item<=last)
        {
            answer.push(item);
            answer.push(item);
        }
    }
    return answer;
}


const shuffledArray=function(array)
{
    answer=[];
    for(let i=array.length-1;i>=0;i--)
    {
        answer.push(array[i]);
    }
    return answer;
}

const takeDimensionalArray=function(rows,colms)
{
    //answer[rows][colms]=[];
    answer=[];
    for(let i=0;i<rows;i++)
    {
        answer[i]=[];
        for(let j=0;j<colms;j++)
        {
            grade=parseInt(prompt("enter the grade of student "+(i+1)+" in course "+(j+1)));
            answer[i][j]=grade;
        }
    }
    return answer;
}


const studentTotalGrades=function(array,rows,colms)
{
    answer=[];
    for(let i=0;i<rows;i++)
    {
        eachStudent=0;
        for(let j=0;j<colms;j++)
        {
           eachStudent+=array[i][j];
        }
        answer.push(eachStudent);
    }
    for(let i=0;i<answer.length;i++)
    {
        console.log("total grades for student "+(i+1)+"= "+answer[i]);
    }
}


const averageCourse=function(array,rows,colms)
{
    average=[];
    for(let j=0;j<colms;j++)
    {
        eachCours=0;
        for(let i=0;i<rows;i++)
        {
            eachCours+=array[i][j];
        }
        average.push(eachCours);
    }
    for(let i=0;i<average.length;i++)
    {
        console.log("average grade for course "+(i+1)+" = "+average[i]);
    }
    //return average;
}