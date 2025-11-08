const fs = require("fs");

//fs.writeFile("message.txt","File written", (err)=>{
 //   if (err) throw err;
 //   console.log("The file has been saved succesfully! ");
//});

fs.readFile("message.txt","utf8", (err,data)=>{
if (err) throw err;
console.log(data);
});