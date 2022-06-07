function scuberGreetingForFeet(){
  // Write your code here!
}

function ternaryCheckCity(){
  // Write your code here!
}

function switchOnCharmFromTip(){
  // Write your code here!
}function scuberGreetingForFeet(feet){
  // Write your code here!
  if(feet <= 400){
    return "This one is on me!";
  }
  else if(feet >= 2000 && feet <= 2500){
    return "I will gladly take your thirty bucks.";
  }
  else if(feet > 2500){
    return "No can do.";
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';

}

function switchOnCharmFromTip(generous){
  // Write your code here!
  switch (generous) {
    case "generous":
       return 'Thank you so much.';
    case "not as generous":
      return 'Thank you.'
  
    default:
      return "Bye.";
  }
}
switchOnCharmFromTip("generous")