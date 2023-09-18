const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const all_chars = require("./all_chars.js");
let array_of_bsc = [];
let times_repeated = 0;
rl.question("Please enter a text in English and it will be translated to Bharat Secret Code(BSC) language for you:- \n :-  ", (prompt) => {
    var array = prompt.split(' ');
    console.log(convertEnglishToBSC(array).join(' '));
});

function convertEnglishToBSC(array) {
    for(let x = 0; x < array.length; x++) {
        //console.log(array[x]);
        const word = array[x];
        for(let y = 0; y < word.length; y++) {
             const letter = word.charAt(y);
             array_of_bsc.push(String(Number((Math.pow(((all_chars.indexOf(letter)) + 1), 2)) + 1)).toString());
             times_repeated = word.length;
        }
   
        if(times_repeated = word.length) {
            array_of_bsc[(array_of_bsc.length) - 1] += ",";
            times_repeated = 0;
        }else{
             
        }
       
    } 
    return array_of_bsc;
}