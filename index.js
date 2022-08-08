function scuberGreetingForFeet(someNumber){
  let greeting;
  if (someNumber < 400) {
    greeting = "This one is on me!";
    return greeting;
  } else if (someNumber > 400 && someNumber < 2000) {
    return 'That will be twenty bucks.'
  } else if (someNumber > 2000 && someNumber < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (someNumber > 2500) {
    return 'No can do.'
  }
  
}

function ternaryCheckCity(city){
  let destination;
  city === 'NYC' ? (destination = "Ok, sounds good.") : (destination = 'No go.');
  return destination;
}

function switchOnCharmFromTip(tip){
  let response;
  switch(tip){
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.'
  }
  return response;
}