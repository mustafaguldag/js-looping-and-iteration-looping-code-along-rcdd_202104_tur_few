// Code your solutions in this file


function writeCards(stringName ,eventNAme){
    let newArr = [];
    
    for (let i =0; i < stringName.length; i++) {
        let  newStr = `Thank you, ${stringName[i]}, for the wonderful ${eventNAme} gift!` ;
        newArr.push(newStr)
    
    }
    
    return newArr ;
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(number){
    
    while (number >= 0) { 
    console.log(number);
    number-- ;  
}
}
countDown();