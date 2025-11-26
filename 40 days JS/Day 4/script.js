const condition = true;
const innerCondition = false;

if(condition){
  console.log("Outer if");

  if(innerCondition){
    console.log("Inner if");
  } else{
    console.log("Inner else");
  }
} else {
    console.log("outer else");
}


let day = 5;

switch(day){
  
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Satarday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day Number");
}