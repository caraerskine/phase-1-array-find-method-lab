const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]// code your solution here

 function baseball(elem){
    return elem.result === "W"  
} 



function superbowlWin(record){
const win = record.find(baseball)
    console.log(record)
    return win ? win.year : undefined

// return win && win.year
// if (win){
    // return win.year
    //}
}


