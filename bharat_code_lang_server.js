const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const all_chars = require("./all_chars.js");
const cors = require("cors");
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/translate_to_english", (req, res) => {
   const body = req.body;
   const code = body.code;
   var array_in_string = convertBSCtoEnglish(code.split(' ')).toString();
   const english = array_in_string.replace(/,/g, "");
   res.end(
     `
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>BharatSecretCode (BSC) language (Made exclusively by Namish Kumar)</title>
     </head>
     <style>
         body {
             background-color: pink;
             text-align: center;
             font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
             font-size:18px;
         }
     
         input {
              padding: 15px;
              font-size: 17.5px;
              width: 15em;
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
              outline: none;
         }
     
         button {
             background-color: black;
             color: white;
             padding: 15px;
             border: none;
             outline: none;
             width: 12.5em;
             font-size: 17.5px;
         }
     </style>
     <body>
         <h1>BharatSecretCode</h1>
         <p>The code translated to English is:- </p>
         <p><b>${english}</b></p>
         <br>
         <p>Like this, generate your own code now!</p>
         <a href="/generate"><button>Generate</button></a>
     </body>
     </html>
     `
    );
});

app.get("/generate", (req, res) => {
  res.sendFile(__dirname + "/hola.html");
});

app.post("/translate_to_bsc", (req, res) => {
    const body = req.body;
   const code = body.code;
   var english = convertEnglishToBSC(code.split(' ')).join(' ');
   res.end(
     `
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>BharatSecretCode (BSC) language (Made exclusively by Namish Kumar)</title>
     </head>
     <style>
         body {
             background-color: pink;
             text-align: center;
             font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
             font-size:18px;
         }
     
         input {
              padding: 15px;
              font-size: 17.5px;
              width: 15em;
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
              outline: none;
         }
     
         button {
             background-color: black;
             color: white;
             padding: 15px;
             border: none;
             outline: none;
             width: 12.5em;
             font-size: 17.5px;
         }
     </style>
     <body>
         <h1>BharatSecretCode</h1>
         <p>The code translated to BharatSecretCode is:- </p>
         <p><b>${english}</p>
         <br>
         <p>Copy this code and share it with your friends and family now!!</p
     </body>
     </html>
     `
    );
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

app.listen(process.env.PORT, () => {
    console.log("Server started!");
});