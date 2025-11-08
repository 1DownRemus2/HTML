import express from "express";
const add = express();
const port = 3000;

add.listen( port,() =>{
    console.log(`The server is running on port: ${port}.`);
})
