// User is only allowed to make a purchase when he is :
// Logged in
// Email Verified
// CardInfo - Valid
// If any one is missing, stop purchase

var userLoggedIn = true;
var userEmailVerified = true;
var cardInfoValid =true;

if( userLoggedIn && userEmailVerified && cardInfoValid){
    console.log("Redirecing to payment page");
}
else{
    console.log("Redirecting to login page")
}