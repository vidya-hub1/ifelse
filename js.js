// You have a variable day that contains the name of a day 
// (e.g., "Monday", "Tuesday", etc.). Write an if-else statement to determine 
// if the day is a weekend. The weekend is defined as either Saturday or Sunday.

var day = 'saturday'
if(day='monday'){
    console.log("it is a week day.")
}else{
    console.log("it is a weekend.")
}

// You have a variable age representing a person's age
//  and a boolean variable citizenship indicating whether they are a citizen 
// (true for citizen, false for non-citizen).
// Write an if-else statement to check if the person is eligible to vote.
// A person is eligible to vote if they are at least 18 years old and a citizen.

var age = 17;
var citizenship = true;
if(age>=18 && citizenship){
    console.log('you are eligible to vote')
}else{
    console.log('you are not eligible to vote')
}


var age = 21;
var citizenship = true;
if(voter = (age>=18 ) && (citizenship=true) ? 'you are eligible to vote' : 'you are not eligible to vote'){
    console.log(voter)
}

// You have a simple login form where users enter their username and password.
//  You want to check if the username is "admin" and the password is "12345".
//   The username can be entered in any case (e.g., "Admin", "ADMIN", "admin"), 
//   while the password must be checked strictly.

userName= prompt("enter username")
password= prompt("enter password")
var username = ["admin", "ADMIN", "Admin"];
var password = 12345;
if(username=="Admin" && password===12211){
    console.log("you are logged in successfully")
}else{
    console.log("entered password is incorrect")
}
