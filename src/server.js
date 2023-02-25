const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const Note = require('./Models/Notes');

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://shubham04:843201@cluster0.kmw2qve.mongodb.net/?retryWrites=true&w=majority").then(function(){


    const PORT = process.env.PORT || 5000;
    app.listen(PORT, function(){
        console.log("Server Started at : " + PORT);
    });

    
    app.get("/",function(req, res){
        res.send("APIs works!!!");
    });



    const noteRouter = require('./routes/Note');
    app.use("/notes",noteRouter);


});

