function scuberGreetingForFeet(someValue) {
  //let ride
  if (someValue <= 400) {
    return 'This one is on me!'
    
  }else  if(someValue >= 2500){
     return 'No can do.'
     
  }else    {
   return "I will gladly take your thirty bucks."
  }
  //return ride
}
scuberGreetingForFeet('199')

function ternaryCheckCity(city) {

  if (city === 'NYC') {
    return "Ok, sounds good."
  }else  {
    return "No go."
  }

  
  //let place = city === "Pittsburgh" ? "Ok, sounds good." : "No go."
  
  
}
ternaryCheckCity()
 

function switchOnCharmFromTip(tip) {
  if (tip === 'generous') {
    return "Thank you so much."
  }else if (tip === "not as generous") {
    return "Thank you."
  }else {
    return "Bye."
  }
}