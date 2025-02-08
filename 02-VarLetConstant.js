//[i] 'var' variable -> 
var name = "John Doe" 
if(true) {
    console.log("name:", name)
}

function solve() {
    var age = 42
    console.log("age:", age)
}
solve()

var x = 10;
var x = 20;
console.log("x:", x)

//[ii] 'let' varaible -> 
let person = "John Doe"
console.log("person: ", person)
person = 42
console.log("Changed data type of 'person': ", person) // JS is dynamically typed language


//[iii] 'const' varaible -> 
const organization = "dummyOrganization"
console.log("Organization: " , organization)
//organization = "notPossibleToChanges"
