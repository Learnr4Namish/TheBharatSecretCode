console.log("Let us see the list of possible AlphaCodes:- ");
const all_chars = require("./all_chars.js");
for(let x = 0; x < all_chars.length; x++) {
   console.log(`${x+1}. The alpha code of ${all_chars[x]} is ${(Math.pow(x + 1, 2)) + 1}`);
}