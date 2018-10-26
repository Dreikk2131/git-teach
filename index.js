const express = require("express");

const app = express();

var arr = [];

app.get("/", (req, res) => {
    res.send(arr);
});

app.get("/add/:name", (req, res)=>{
    arr.push(req.params.name);
    res.send("OK");
});

app.get("/delete/:name", (req, res)=>{
    var y =req.params.name;
    arr.splice(arr.indexOf(req.params.name),1);
    res.send(arr);
});

app.listen(5000, ()=> console.log("Server has been started"));