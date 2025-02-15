/* - String Template - String declared inside ` `.
   - Gives extra functionalities than string like we can also handle cases like string declared on multiple lines.
*/

//01-Template string.
let employee = `John Doe
45 Street, England`

console.log("\nEmployee: ", employee);

//02-String concatenation
let firstName = "John"
let lastName = "Doe"
let person = firstName + lastName;
console.log("\nContate two strings: ", person);

//03-To access actual string values inside brackets - ` `
let human = `${firstName} ${lastName}`
console.log("\nTo access actual string values inside brackets: ", human)

//04-To transform string to upper case
console.log("\nConvert string to upper case: ",firstName.toUpperCase());

//05-To transform string into lower case
console.log("Convert string to lower case: ", lastName.toLowerCase());

//06-Substring
console.log("\nSubstring: ", firstName.substring(1));
console.log("Give uppper bound and lower bound to find substring: ", firstName.substring(1, 3)); //Last bound is always exclusive.

//07-Split function
console.log("\nSplit function: ", employee.split(' '))

//08-'\' in split function.
let employeeName = "John\Doe"
console.log("\nWhen '\' is present in the string:  ", employeeName.split('\\'));

//09-To declare string inside string using '\'
let sentense = "Hello Ji, \"Jane Doe\" here!"
console.log("\nSentense: ", sentense);

//10-Join array to convert it into string.
let myToDoList = ["JavaScript", "Dynamic Programming Questions", "Interview Prep", "Resume Updation"]
console.log("\nTo-Do List: ", myToDoList.join(" "))