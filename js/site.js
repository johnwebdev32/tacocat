//Get string from the page

function getValue(){

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let returnObj = checkForPalindrome(userString);

    displayString(revString);
}

//Check if the string is a palindrome

function checkForPalindrome(userString){

    userString = userString.toLowerCase();

    let regex = /[^a-z0-9]/gi;

    userString = userString.replace(regex,"");

    let revString = [];
    let returnObj = {};

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];        
    }

    if (revString == userString){
        returnObj.msg = "Great! You've entered a palindrome!"
    }
    else{
        returnObj.msg = "Sorry! You did not enter a palindrome."
    }
    returnObj.reversed = revString;

    return returnObj;

    }

//Display a message to the string.

function displayMessage(returnObj)
{
    document.getElementById("alertHeader").innerHTML = returnOjb.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is:" ${returnObj.reversed} `;
    document.getElementById("alert").classList.remove("invisible");
}
