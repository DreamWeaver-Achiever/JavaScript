function sayHi() {
    console.log("Hello World !")
}
sayHi()

function table(n) {
    let i, multi=0;
    console.log("Table of number: ")
    for(i=1; i<=10; i++) {
        multi = n*i;
        console.log(multi);
    } 
    
}
table(2);