function calcAverage(score1,score2,score3)
{
    return (score1+score2+score3)/3;
}
function checkWinner(team1,team2)
{
    if(team1>team2)
      return "team 1 is the winner";
    return "team 2 is the winner";
}
function checkIsNumber(_number)
{
    while((Number.isNaN(parseInt(_number))))
    {
        _number=prompt("please enter a number");
    }
    return _number;
}
function sumtion(numberOfValues)
{
    var sum = 0;
    for(var i=0;i<numberOfValues;i++)
    {
        var currentNumber=checkIsNumber(prompt());
        sum+=parseInt(currentNumber);
    }
   return sum;
}
// undefined undefined undefined ==> as a variable
// printVariables();
let value_4 =90;
function printVariables(value_1,value_2,value_3)
{
    var value_4=3;
    var value_5=5;
    console.log(value_1);
    console.log(value_2);
    console.log(value_3);
    console.log(value_4);
    //console.log(value_5);
    //Sconsole.log(arguments);
}