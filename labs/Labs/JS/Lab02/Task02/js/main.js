let fullString="this is a javascript lkvjgklvcklbvckljblkc string demo";

function getMaxWordLength(){
    let lengths=[];
    let stringSplits=fullString.split(" ");
    for (let index = 0; index < stringSplits.length; index++) {
        lengths.push(stringSplits[index].length);
    }
    let maxLength=Math.max(...lengths);
    let indexofMax=lengths.indexOf(maxLength);
    return stringSplits[indexofMax];
  
}
let maxStringLegth=getMaxWordLength(fullString);
console.log(`Max length string is : ${maxStringLegth}`);
