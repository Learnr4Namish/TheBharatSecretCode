const all_chars = require("./all_chars");
var x = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
"http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2340 4459 c-243 -28 -518 -117 -723 -235 -212 -121 -449 -330 -589
-519 -341 -460 -461 -1057 -322 -1607 185 -736 776 -1286 1521 -1420 184 -33
482 -32 668 1 911 162 1575 955 1575 1881 0 510 -199 990 -559 1351 -366 366
-850 563 -1368 558 -70 -1 -162 -5 -203 -10z"/>
</g>
</svg>`;

var array = x.split(' ');
    console.log(convertEnglishToBSC(array).join(' '));
function convertEnglishToBSC(array) {
    let array_of_bsc = [];
let times_repeated = 0;
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

