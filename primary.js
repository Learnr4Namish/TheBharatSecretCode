const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const all_chars = require("./all_chars.js");
rl.question("Please enter a text in BSC (Bharat-Secret-Code) language and it will be translated to English for you:- ", (prompt) => {
    var array = prompt.split(' ');
    var array_in_string = convertBSCtoEnglish(array).toString();
    console.log(array_in_string.replace(/,/g, ""));
}); 

function convertBSCtoEnglish(array) {
    
   for(let x = 0; x < array.length; x++) {
     if(array[x].indexOf(",") > -1) {
        array[x] = all_chars[Number((Math.sqrt((array[x].replace(",", " ")) - 1)) - 1)].concat(" ");
     }else{
        array[x] = all_chars[Number((Math.sqrt(array[x] - 1)) - 1)];
     }
       //array[x] = all_chars[Number((Math.sqrt(array[x] - 1)) - 1)];
   }

   return array;
}
